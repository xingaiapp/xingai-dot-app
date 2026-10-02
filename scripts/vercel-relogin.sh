#!/bin/zsh
set -e
cd "$HOME/Desktop/ai-projects-work-space/xingai-dot-app"
echo "→ vercel login (browser will open)"
vercel login
echo "→ whoami"
vercel whoami
echo "DONE — paste this output back in chat"
