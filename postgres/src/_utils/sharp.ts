import sharp from "sharp";

export const resizeImage = async (
  filePath: string,
  width: number,
  height: number,
  targetFolder: string,
  outputFileName: string
) => {
  const image = await sharp(filePath);
  const resized = await image.resize(width, height);
  const info = await resized.toFile(`${targetFolder}/${outputFileName}`);

  return {
    outputFileName: `${width}x${height}/${outputFileName}`,
    info
  };
};
