#!/usr/bin/env bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // ""')

if ! echo "$COMMAND" | grep -qE 'git commit'; then exit 0; fi
if ! echo "$COMMAND" | grep -qE -- '-m'; then exit 0; fi

MSG=$(echo "$COMMAND" | sed -n 's/.*-m "\([^"]*\)".*/\1/p')
[ -z "$MSG" ] && MSG=$(echo "$COMMAND" | sed -n "s/.*-m '\([^']*\)'.*/\1/p")
[ -z "$MSG" ] && exit 0

echo "$MSG" | bun x commitlint