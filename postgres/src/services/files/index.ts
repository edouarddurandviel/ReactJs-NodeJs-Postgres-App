import fs from "node:fs/promises";
import path from "path";

export const getFileDetailedStats = async (filePath: string) => {
  const fileDirectory = path.dirname(filePath);
  const fileName = path.basename(filePath);
  const fileExtention = path.extname(filePath);

  const stats = await fs.stat(filePath);
  const isDirectory = stats.isDirectory();
  const isFile = stats.isFile();
  const isSymbolicLink = stats.isSymbolicLink();
  const fileSize = stats.size;

  return {
    fileDirectory,
    fileName,
    fileExtention,
    isDirectory,
    isFile,
    isSymbolicLink,
    fileSize
  };
};
