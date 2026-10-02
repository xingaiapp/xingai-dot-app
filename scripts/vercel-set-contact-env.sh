#!/bin/zsh
# Run in YOUR Cursor terminal (Agent sandbox cannot reach Vercel):
#   cd ~/Desktop/ai-projects-work-space/xingai-dot-app && ./scripts/vercel-set-contact-env.sh
set -euo pipefail
cd "$(dirname "$0")/.."

echo "→ whoami"
vercel whoami

KEY_FILE=""
for f in \
  "../xingai-invest-ai/stock-ai-back-end/.env" \
  "../invest-t-advisor/.env"
do
  if [[ -f "$f" ]] && grep -qE '^(RESEND_API_KEY|INVEST_AI_RESEND_API_KEY)=' "$f"; then
    KEY_FILE="$f"
    break
  fi
done

if [[ -n "$KEY_FILE" ]]; then
  RESEND_API_KEY="$(
    python3 - <<PY
from pathlib import Path
text = Path("$KEY_FILE").read_text()
for line in text.splitlines():
    line=line.strip()
    if line.startswith("RESEND_API_KEY=") or line.startswith("INVEST_AI_RESEND_API_KEY="):
        val=line.split("=",1)[1].strip().strip("'\"")
        if val:
            print(val)
            break
PY
  )"
  echo "→ found Resend key in $KEY_FILE (len=${#RESEND_API_KEY})"
else
  echo "Paste Resend API key (re_...), then Enter:"
  read -rs RESEND_API_KEY
  echo ""
fi

if [[ -z "${RESEND_API_KEY:-}" ]]; then
  echo "No key — abort."
  exit 1
fi

TO_EMAIL="contact@xingai.app"
FROM_EMAIL="XingAI Contact <onboarding@resend.dev>"

echo ""
echo "Will set on xingai-dot-app (production / preview / development):"
echo "  RESEND_API_KEY"
echo "  CONTACT_TO_EMAIL=$TO_EMAIL"
echo "  CONTACT_FROM_EMAIL=$FROM_EMAIL"
read -q "REPLY?Continue? [y/N] " || true
echo ""
[[ "$REPLY" == [yY] ]] || { echo "Aborted."; exit 1; }

add_env() {
  local name="$1" value="$2" env="$3"
  # vercel env add reads value from stdin; --force overwrites when supported
  if printf '%s' "$value" | vercel env add "$name" "$env" --force >/dev/null 2>&1; then
    echo "  ok $name ($env) [force]"
  elif printf '%s' "$value" | vercel env add "$name" "$env" >/dev/null 2>&1; then
    echo "  ok $name ($env)"
  else
    echo "  FAIL $name ($env) — may already exist; remove in dashboard and retry"
    return 1
  fi
}

for ENV in production preview development; do
  echo "→ $ENV"
  add_env RESEND_API_KEY "$RESEND_API_KEY" "$ENV" || true
  add_env CONTACT_TO_EMAIL "$TO_EMAIL" "$ENV" || true
  add_env CONTACT_FROM_EMAIL "$FROM_EMAIL" "$ENV" || true
done

echo ""
vercel env ls
echo ""
echo "DONE. Next: push contact API code, then redeploy (or wait for git deploy)."
