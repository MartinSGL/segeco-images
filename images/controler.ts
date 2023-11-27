import * as fs from "fs";
import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { v4 as uuidV4 } from "uuid";
import path from "path";
import { port } from "../app";

export const getImages = async (req: Request, res: Response) => {
  const imageName = req.params.image;

  // Use path.join to construct the full path to the image
  const imagePath = path.join(__dirname, "../uploads", imageName);

  // Send the image file
  res.sendFile(imagePath, (err) => {
    if (err) {
      // Handle error, for example, log it or send an error response
      res.status(404).json({
        error: true,
        message: "Image wasn't found",
        data: null,
      });
    }
  });
};

export const saveImages = async (req: Request, res: Response) => {
  try {
    const file = req.files?.image as UploadedFile;
    const uuid = uuidV4();
    const extension = file.mimetype.split("/")[1];

    const folderPath = path.join(__dirname, "../uploads")    
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    file.mv(`./uploads/${uuid}.${extension}`, (err: Error) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: true,
          message: "Internal Server Error",
          data: null,
        });
      }

      const url = `${req.protocol}://${req.hostname}:${port}${req.originalUrl}/${uuid}.${extension}`;

      res.status(200).json({
        error: false,
        message: "image save successfully",
        data: { url },
      });
    });
  } catch (error: unknown) {
    res.status(500).json({
      error: true,
      message: "image save successfully",
      data: null,
    });
  }
};
