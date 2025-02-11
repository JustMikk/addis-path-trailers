// my-loader.ts
export default function myLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Assuming your images are stored in the public/assets/images folder
  return `/images${src}?w=${width}&q=${quality || 75}`;
}
