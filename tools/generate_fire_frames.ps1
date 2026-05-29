Add-Type -AssemblyName System.Drawing

$source = Join-Path (Get-Location) "fire_animation_source.png"
$outDir = Join-Path (Get-Location) "fire_generated_frames"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

function New-PointF($x, $y) {
    New-Object System.Drawing.PointF ([single]$x), ([single]$y)
}

function Add-FlarePath($path, $cx, $baseY, $height, $width, $lean) {
    $path.StartFigure()
    $path.AddBezier(
        (New-PointF $cx $baseY),
        (New-PointF ($cx - $width * 0.8) ($baseY - $height * 0.26)),
        (New-PointF ($cx - $width * 0.55 + $lean) ($baseY - $height * 0.74)),
        (New-PointF ($cx + $lean) ($baseY - $height))
    )
    $path.AddBezier(
        (New-PointF ($cx + $lean) ($baseY - $height)),
        (New-PointF ($cx + $width * 0.72 + $lean) ($baseY - $height * 0.65)),
        (New-PointF ($cx + $width * 0.62) ($baseY - $height * 0.22)),
        (New-PointF $cx $baseY)
    )
    $path.CloseFigure()
}

function Draw-Flare($graphics, $phase, $side, $x, $y, $height, $width) {
    $lean = [Math]::Sin($phase * 1.7 + $side) * 11
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    Add-FlarePath $path $x $y $height $width $lean

    $rect = New-Object System.Drawing.Rectangle ([int]($x - $width - 8)), ([int]($y - $height - 8)), ([int]($width * 2 + 16)), ([int]($height + 18))
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $rect,
        [System.Drawing.Color]::FromArgb(230, 255, 215, 62),
        [System.Drawing.Color]::FromArgb(230, 245, 83, 20),
        [System.Drawing.Drawing2D.LinearGradientMode]::Vertical
    )
    $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(210, 158, 45, 18)), 6

    $graphics.FillPath($brush, $path)
    $graphics.DrawPath($pen, $path)

    $pen.Dispose()
    $brush.Dispose()
    $path.Dispose()
}

function Draw-SourceFrame($graphics, $image, $frame, $phase) {
    $temp = New-Object System.Drawing.Bitmap 512, 512, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $tempGraphics = [System.Drawing.Graphics]::FromImage($temp)
    $tempGraphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $tempGraphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $tempGraphics.Clear([System.Drawing.Color]::Transparent)

    $scale = [Math]::Min(378 / $frame.W, 456 / $frame.H)
    $drawWidth = $frame.W * $scale
    $drawHeight = $frame.H * $scale
    $dx = (512 - $drawWidth) / 2
    $dy = 512 - $drawHeight - 28

    $dest = New-Object System.Drawing.RectangleF ([single]$dx), ([single]$dy), ([single]$drawWidth), ([single]$drawHeight)
    $srcRect = New-Object System.Drawing.Rectangle $frame.X, $frame.Y, $frame.W, $frame.H
    $tempGraphics.DrawImage($image, $dest, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $tempGraphics.Dispose()

    $bitmapData = $temp.LockBits(
        (New-Object System.Drawing.Rectangle 0,0,512,512),
        [System.Drawing.Imaging.ImageLockMode]::ReadWrite,
        [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
    )
    $bytes = New-Object byte[] ($bitmapData.Stride * $bitmapData.Height)
    [System.Runtime.InteropServices.Marshal]::Copy($bitmapData.Scan0, $bytes, 0, $bytes.Length)

    for ($i = 0; $i -lt $bytes.Length; $i += 4) {
        $b = [int]$bytes[$i]
        $g = [int]$bytes[$i + 1]
        $r = [int]$bytes[$i + 2]
        $brightness = ($r + $g + $b) / 3
        $warmScore = $r * 1.25 + $g * 0.9 - $b * 1.7
        $isBlackPanel = $brightness -lt 38 -and [Math]::Abs($r - $g) -lt 18 -and [Math]::Abs($g - $b) -lt 18
        $isFireColor = $r -gt 95 -and $g -gt 35 -and $r -gt ($b + 45) -and $warmScore -gt 110
        $isSoftGlow = $r -gt 64 -and $g -gt 22 -and $r -gt ($b + 28) -and $warmScore -gt 72

        if ($isBlackPanel) {
            $bytes[$i + 3] = 0
        } elseif ($isFireColor) {
            $alpha = [Math]::Min(255, [Math]::Max(180, ($warmScore - 115) * 2.8))
            $bytes[$i + 3] = [byte]$alpha
        } elseif ($isSoftGlow -and $brightness -gt 58) {
            $alpha = [Math]::Min(96, [Math]::Max(0, ($warmScore - 72) * 2.2))
            $bytes[$i + 3] = [byte]$alpha
        } else {
            $bytes[$i + 3] = 0
        }
    }

    [System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $bitmapData.Scan0, $bytes.Length)
    $temp.UnlockBits($bitmapData)
    $graphics.DrawImage($temp, 0, 0)
    $temp.Dispose()
}

$frames = @(
    @{ X = 122; Y = 300; W = 505; H = 930 },
    @{ X = 790; Y = 305; W = 515; H = 930 },
    @{ X = 1458; Y = 298; W = 525; H = 940 },
    @{ X = 2140; Y = 318; W = 530; H = 920 }
)
$sourceOrder = @(0, 1, 2, 3, 2, 1)
$frameCount = 18
$image = [System.Drawing.Image]::FromFile($source)

for ($i = 0; $i -lt $frameCount; $i++) {
    $phase = ($i / $frameCount) * [Math]::PI * 2
    $sourceIndex = $sourceOrder[$i % $sourceOrder.Count]
    $bmp = New-Object System.Drawing.Bitmap 512, 512, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::Transparent)

    Draw-SourceFrame $g $image $frames[$sourceIndex] $phase

    if (($i % 6) -eq 5) {
        Draw-Flare $g $phase 2 275 172 62 18
    }

    $filename = Join-Path $outDir ("fire_{0:D2}.png" -f $i)
    $bmp.Save($filename, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

$image.Dispose()
Write-Output "Generated $frameCount augmented fire frames in $outDir"
