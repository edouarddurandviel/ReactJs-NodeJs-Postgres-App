import fs from "fs";
import { resizeImage } from "../../../_utils/sharp";
import { getFileDetailedStats } from "@services/files";

export const saveImageResizedFile = async (
  file: any,
  width: number,
  height: number,
  currentImg?: string
) => {
  const fileName = file.filename.split(".")[0];
  const extName = `-${width}x${height}.jpeg`;
  const outputFileName = fileName.concat(extName);
  const targetFolder = `uploads/${width}x${height}`;

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  if (currentImg) {
    fs.rmSync(`uploads/${currentImg}`);
  }

  const resizedImage = await resizeImage(file.path, width, height, targetFolder, outputFileName);

  return resizedImage;
};

export const deleteFileSession = (file: any) => {
  if (file && fs.existsSync(file.path)) {
    fs.rmSync(file.path);
  }
};

export const getImageInformation = async (filePath: string) => {
  const { fileDirectory, fileName, fileExtention, isDirectory, isFile, isSymbolicLink, fileSize } =
    await getFileDetailedStats(filePath);
};
