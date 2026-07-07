import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
  }
});

const fileFilter = (req: any, file: any, cb: any) => {
  const allowed = ["image/jpeg", "image/png", "image/webp"];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 25 * 1024 * 1024
  },
  fileFilter
});
