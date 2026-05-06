$root = "c:\Users\Valentin\Newlocate"
$port = 8000
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$port"

$mime = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".txt"  = "text/plain; charset=utf-8"
}

while ($listener.IsListening) {
    try {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $res = $ctx.Response
        $rel = [System.Web.HttpUtility]::UrlDecode($req.Url.AbsolutePath).TrimStart('/')
        if ([string]::IsNullOrEmpty($rel)) { $rel = "index.html" }
        $file = Join-Path $root $rel
        # block path traversal
        $resolved = [System.IO.Path]::GetFullPath($file)
        if (-not $resolved.StartsWith([System.IO.Path]::GetFullPath($root), [System.StringComparison]::OrdinalIgnoreCase)) {
            $res.StatusCode = 403
            $res.Close()
            continue
        }
        if ((Test-Path $resolved -PathType Container)) {
            $resolved = Join-Path $resolved "index.html"
        }
        if (Test-Path $resolved -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($resolved)
            $ext = [System.IO.Path]::GetExtension($resolved).ToLower()
            $type = $mime[$ext]
            if (-not $type) { $type = "application/octet-stream" }
            $res.ContentType = $type
            $res.ContentLength64 = $bytes.Length
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host "200 $rel"
        } else {
            $res.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rel")
            $res.OutputStream.Write($msg, 0, $msg.Length)
            Write-Host "404 $rel"
        }
        $res.Close()
    } catch {
        Write-Host "Error: $_"
    }
}
