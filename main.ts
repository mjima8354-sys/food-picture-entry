// make.fun food-picture-01 entry: writes the ramen bowl illustration to /output/entry.png
// Deterministic: the image is a fixed asset; the program writes the same bytes every run.
import * as fs from 'node:fs';
import * as path from 'node:path';

const src = path.join(process.env.REPO_DIR ?? '/bot', 'entry.png');
const out = '/output/entry.png';
fs.mkdirSync('/output', { recursive: true });
fs.copyFileSync(src, out);
console.log('wrote', out, fs.statSync(out).size, 'bytes');
