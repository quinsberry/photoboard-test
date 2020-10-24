import { Schema, model, Document } from 'mongoose'

export interface Tag {
  confidence: number
  tag: string
}

export interface ImageModelInterface {
  imageUrl: string
  board: string
  tags: Tag[]
}

export type ImageDocumentModelInterface = ImageModelInterface & Document

const ImageSchema = new Schema<ImageModelInterface>(
  {
    imageUrl: String,
    board: String,
    tags: Array,
  },
  {
    timestamps: true,
  },
)

export const ImageModel = model<ImageDocumentModelInterface>('Image', ImageSchema)
