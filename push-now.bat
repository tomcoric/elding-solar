@echo off
cd /d D:\Projects\elding-solar
git add -A
git commit -m "feat: electricity effects — animated counter, lightning SVG, electric CTA pulse, glow borders, circuit line"
git push
echo.
echo PUSH ZAVRSEN!
timeout /t 3
