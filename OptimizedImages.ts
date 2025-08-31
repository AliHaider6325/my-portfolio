import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

async function run() {
  await imagemin(["public/*.{jpg,png}"], {
    destination: "public/optimized",
    plugins: [
      imageminWebp({ quality: 80 }),              // Convert to WebP
      imageminMozjpeg({ quality: 80 }),           // Optimize JPG
      imageminPngquant({ quality: [0.6, 0.8] })   // Optimize PNG
    ],
  });

  console.log("✅ Images optimized! Find them in /public/optimized");
}

run();
