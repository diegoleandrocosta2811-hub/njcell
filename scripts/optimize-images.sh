#!/usr/bin/env bash
# Comprime imagens estáticas grandes em public/images (JPEG/PNG).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMAGES_DIR="$ROOT/public/images"
MIN_BYTES=180000
MAX_DIMENSION=1400
JPEG_QUALITY=82

if ! command -v sips >/dev/null 2>&1; then
  echo "sips não encontrado — pulando otimização de imagens."
  exit 0
fi

optimized=0

while IFS= read -r -d '' file; do
  size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")
  if [ "$size" -le "$MIN_BYTES" ]; then
    continue
  fi

  ext="${file##*.}"
  ext_lower=$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')

  if [ "$ext_lower" = "png" ]; then
    continue
  fi

  tmp="${file}.opt"

  if [ "$ext_lower" = "jpg" ] || [ "$ext_lower" = "jpeg" ]; then
    sips -Z "$MAX_DIMENSION" -s format jpeg -s formatOptions "$JPEG_QUALITY" "$file" --out "$tmp" >/dev/null
    mv "$tmp" "$file"
    optimized=$((optimized + 1))
    echo "✓ $(basename "$file")"
  fi
done < <(find "$IMAGES_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

echo "Otimização concluída: $optimized arquivo(s) processado(s)."
