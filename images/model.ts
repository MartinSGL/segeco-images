import mongoose, { Schema } from "mongoose";

interface Images {
  url: string;
}

const imagesSchema = new Schema<Images>({
  url: { type: String, required: true },
});

export const ImageModel = mongoose.model('Image', imagesSchema);
