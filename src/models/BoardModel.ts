import { Schema, model, Document } from 'mongoose'
import { ImageModelInterface } from './ImageModel'

export interface BoardModelInterface {
  name: string
  images: ImageModelInterface[]
}

export type BoardDocumentModelInterface = BoardModelInterface & Document

const BoardSchema = new Schema<BoardModelInterface>(
  {
    name: String,
    images: Array,
  },
  {
    timestamps: true,
  },
)

export const BoardModel = model<BoardDocumentModelInterface>('Board', BoardSchema)
