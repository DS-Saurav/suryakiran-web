import sharp from "sharp";
import { resolve, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const galleryFiles = [
  "503741025_4259033944327469_3136576886752811496_n.jpg",
  "507780346_4269753469922183_2888494192748927352_n.jpg",
  "504402031_4259034227660774_6669739287275391894_n.jpg",
  "497679946_4235101540054043_2731219639738009839_n.jpg",
  "504339976_4259033907660806_7239369817901604767_n.jpg",
  "497611388_4234292090134988_4378955904610660149_n.jpg",
  "503204468_4253608371536693_3160925807023882459_n.jpg",
  "497476663_4234291636801700_5825176604175992591_n.jpg",
  "503830422_4259034177660779_5199995504336632996_n.jpg",
  "503830420_4259034317660765_3616527313333635499_n.jpg",
  "503539372_4253608074870056_9158260055573759598_n.jpg",
  "502088608_4252532104977653_6409724636672559732_n.jpg",
];

async function optimizeAll() {
  let totalBefore = 0;
  let totalAfter = 0;
  let successCount = 0;
  let errorCount = 0;

  for (const file of galleryFiles) {
    const inputPath = resolve(projectRoot, "public/images", file);
    const webpName = file.replace(/\.jpg$/i, ".webp");
    const outputPath = resolve(projectRoot, "public/images", webpName);

    try {
      const metadata = await sharp(inputPath).metadata();
      const inputSize = metadata.size || 0;
      totalBefore += inputSize;

      // Gallery images are thumbnails — resize to 800px wide
      await sharp(inputPath)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath);

      const outputMeta = await sharp(outputPath).metadata();
      const outputSize = outputMeta.size || 0;
      totalAfter += outputSize;

      const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
      console.log(
        `✓ ${basename(file)} → ${basename(webpName)}  ` +
        `${(inputSize / 1024).toFixed(0)} KB → ${(outputSize / 1024).toFixed(0)} KB  ` +
        `(${savings}% saved)`
      );
      successCount++;
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
      errorCount++;
    }
  }

  const totalBeforeKb = (totalBefore / 1024).toFixed(0);
  const totalAfterKb = (totalAfter / 1024).toFixed(0);
  const totalSavings = ((1 - totalAfter / totalBefore) * 100).toFixed(1);

  console.log(`\n─── Summary ───`);
  console.log(`Processed: ${successCount} images, Errors: ${errorCount}`);
  console.log(`Total: ${totalBeforeKb} KB → ${totalAfterKb} KB (${totalSavings}% saved)`);
}

optimizeAll().catch((err) => {
  console.error("Batch conversion failed:", err);
  process.exit(1);
});
