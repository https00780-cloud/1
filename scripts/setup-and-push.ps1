# One-shot: authenticate with GitHub, set repo secrets, push main, trigger Cloudflare deploy.
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $Root

$Git = Join-Path $Root ".tools\PortableGit\cmd\git.exe"
$Gh = Join-Path $Root ".tools\gh\bin\gh.exe"

function Ensure-Gh {
  if (-not (Test-Path $Gh)) {
    Write-Host "Downloading GitHub CLI..."
    $ghDir = Join-Path $Root ".tools\gh"
    New-Item -ItemType Directory -Force -Path $ghDir | Out-Null
    $zip = Join-Path $ghDir "gh.zip"
    Invoke-WebRequest -Uri "https://github.com/cli/cli/releases/download/v2.67.0/gh_2.67.0_windows_amd64.zip" -OutFile $zip -UseBasicParsing
    Expand-Archive -Path $zip -DestinationPath $ghDir -Force
    Remove-Item $zip
    $script:Gh = Get-ChildItem $ghDir -Recurse -Filter gh.exe | Select-Object -First 1 -ExpandProperty FullName
  }
}

Ensure-Gh

Write-Host "Checking GitHub login..."
& $Gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Opening browser for GitHub login..."
  & $Gh auth login --hostname github.com --git-protocol https --web
}

$Repo = "https00780-cloud/1"

if (Test-Path (Join-Path $Root ".dev.vars")) {
  $webhook = (Get-Content (Join-Path $Root ".dev.vars") | Where-Object { $_ -match '^DISCORD_DOWNLOAD_WEBHOOK_URL=' }) -replace '^DISCORD_DOWNLOAD_WEBHOOK_URL=', ''
  if ($webhook) {
    Write-Host "Setting DISCORD_DOWNLOAD_WEBHOOK_URL repo secret..."
    $webhook | & $Gh secret set DISCORD_DOWNLOAD_WEBHOOK_URL --repo $Repo
  }
}

if (-not $env:CLOUDFLARE_API_TOKEN) {
  Write-Host ""
  Write-Host "Cloudflare API token required for auto-deploy."
  Write-Host "Create one at: https://dash.cloudflare.com/profile/api-tokens"
  Write-Host "Template: Edit Cloudflare Workers"
  $cfToken = Read-Host "Paste CLOUDFLARE_API_TOKEN (or Enter to skip)"
  if ($cfToken) {
    $cfToken | & $Gh secret set CLOUDFLARE_API_TOKEN --repo $Repo
  }
} else {
  $env:CLOUDFLARE_API_TOKEN | & $Gh secret set CLOUDFLARE_API_TOKEN --repo $Repo
}

if (-not $env:CLOUDFLARE_ACCOUNT_ID) {
  $cfAccount = Read-Host "Paste CLOUDFLARE_ACCOUNT_ID (or Enter to skip)"
  if ($cfAccount) {
    $cfAccount | & $Gh secret set CLOUDFLARE_ACCOUNT_ID --repo $Repo
  }
} else {
  $env:CLOUDFLARE_ACCOUNT_ID | & $Gh secret set CLOUDFLARE_ACCOUNT_ID --repo $Repo
}

Write-Host "Pushing to GitHub..."
& $Gh auth setup-git
& $Git -C $Root push origin main

Write-Host "Done. If Cloudflare secrets were set, GitHub Actions will build and deploy automatically."
Write-Host "Watch: https://github.com/$Repo/actions"
