// Génère les icônes PWA / écran d'accueil à partir des couleurs et du logo.
// Lancer : node scripts/make-icons.mjs   (après modification de theme.mjs ou du logo)
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { theme } from '../src/config/theme.mjs';

const rgb = (t) => `rgb(${t.split(' ').join(',')})`;
const bg = rgb(theme.accent);
const fg = rgb(theme.paper);
// Même dent que le logo de l'en-tête (viewBox 24x24), dessinée au trait
const MARK = 'M7.5 3.5c-2.2 0-3.5 1.7-3.5 4 0 2.2.8 3.6 1.4 5.3.6 1.8.6 4.2 1.1 6.2.3 1.2 1 1.8 1.7 1.8 1.1 0 1.3-1.6 1.6-3.3.2-1.2.5-2.2 1.2-2.2s1 1 1.2 2.2c.3 1.7.5 3.3 1.6 3.3.7 0 1.4-.6 1.7-1.8.5-2 .5-4.4 1.1-6.2.6-1.7 1.4-3.1 1.4-5.3 0-2.3-1.3-4-3.5-4-1.7 0-2.8.8-4.5.8S9.2 3.5 7.5 3.5z';

const svg = (size, pad) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${bg}"/>
  <g transform="translate(${pad} ${pad}) scale(${(size - pad * 2) / 24})">
    <path d="${MARK}" fill="none" stroke="${fg}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
  </g>
</svg>`;

await mkdir('public/icons', { recursive: true });
const out = [
  ['apple-touch-icon.png', 180, 40],
  ['icon-192.png', 192, 44],
  ['icon-512.png', 512, 118],
  ['icon-maskable-512.png', 512, 150], // marge supplémentaire : zone de sécurité maskable
];
for (const [name, size, pad] of out) {
  await sharp(Buffer.from(svg(size, pad))).png().toFile(`public/icons/${name}`);
  console.log('wrote', name);
}
