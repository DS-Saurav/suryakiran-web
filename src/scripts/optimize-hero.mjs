import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const inputPath = resolve(
  projectRoot,
  "public/images/503741025_4259033944327469_3136576886752811496_n.jpg"
);
const outputWebP = resolve(
  projectRoot,
  "public/images/hero-construction.webp"
);
const outputSmallWebP = resolve(
  projectRoot,
  "public/images/hero-construction-small.webp"
);

async function optimize() {
  const metadata = await sharp(inputPath).metadata();
  console.log(`Input: ${inputPath}`);
  console.log(`Dimensions: ${metadata.width}×${metadata.height}`);
  console.log(`Format: ${metadata.format}`);

  // Original size for hero (keeping it full-width but optimized)
  await sharp(inputPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(outputWebP);

  const stats = await sharp(outputWebP).metadata();
  const statsKb = stats.size / 1024;
  console.log(`\nWebP (1920px wide, q80): ${statsKb.toFixed(1)} KB → ${outputWebP}`);

  // Small version for mobile (768px)
  await sharp(inputPath)
    .resize({ width: 768, withoutEnlargement: true })
    .webp({ quality: 75, effort: 6 })
    .toFile(outputSmallWebP);

  const statsSmall = await sharp(outputSmallWebP).metadata();
  const statsSmallKb = statsSmall.size / 1024;
  console.log(`WebP (768px wide, q75): ${statsSmallKb.toFixed(1)} KB → ${outputSmallWebP}`);

  // Check against PRD budget (≤ 100 KB for hero)
  if (statsKb <= 100) {
    console.log(`\n✓ Hero image is within the PRD budget of ≤ 100 KB (${statsKb.toFixed(1)} KB)`);
  } else {
    console.log(`\n⚠ Hero image is ${statsKb.toFixed(1)} KB — exceeds PRD budget of 100 KB.`);
    console.log("  Consider reducing quality or dimensions further if needed.");
  }
}

optimize().catch((err) => {
  console.error("Conversion failed:", err);
  process.exit(1);
});
