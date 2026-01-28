import Image, { type StaticImageData } from "next/image";

export function Avatar({
  src,
  size = 48,
  alt = "Avatar",
}: Readonly<{
  src: string | StaticImageData;
  size?: number;
  alt?: string;
}>) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full object-cover ring-2 ring-background-dark ring-offset-2 dark:ring-offset-background-light"
    />
  );
}
