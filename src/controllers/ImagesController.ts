import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import fetch from 'node-fetch'

import { ImageDocumentModelInterface, ImageModel, ImageModelInterface } from '../models/ImageModel'

interface ImaggaResponse {
  result: {
    tags: {
      confidence: number
      tag: {
        en: string
      }
    }[]
  }
  status: {
    text: string
    type: 'success' | 'error'
  }
}

class ImagesController {
  async addArray(req: Request, res: Response): Promise<void> {
    const images: ImageModelInterface[] = req.body.images

    const correctArr = images.map((item) => {
      return {
        imageUrl: item,
        tags: [],
        board: 'default',
      }
    })

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.status(403).json({
        success: false,
        errors: errors,
      })
      return
    }

    ImageModel.insertMany(correctArr, function (err, doc) {
      if (err) {
        return res.status(500).json({
          success: false,
          errors: err,
        })
      }

      res.status(201).json({
        success: true,
        data: doc,
      })
    })
  }

  async create(req: Request, res: Response): Promise<void> {
    const data: ImageModelInterface = {
      imageUrl: req.body.imageUrl,
      board: req.body.board,
      tags: req.body.tags,
    }

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        errors: errors,
      })
      return
    }

    ImageModel.create<ImageModelInterface>(data, function (err, image) {
      if (err) {
        return res.status(500).json({
          success: false,
          errors: err,
        })
      }

      res.status(201).json({
        success: true,
        data: image,
      })
    })
  }

  async all(_req: Request, res: Response): Promise<void> {
    ImageModel.find({}, function (err, images) {
      if (err) {
        return res.status(500).json({
          success: false,
          errors: err,
        })
      }

      res.status(200).json({
        success: true,
        data: images,
      })
    })
  }

  async showBoard(req: Request, res: Response): Promise<void> {
    const board = req.query.name as string
    ImageModel.find({ board }, function (err, image) {
      if (err) {
        return res.status(500).json({
          success: false,
          errors: err,
        })
      }

      res.status(200).json({
        success: true,
        data: image,
      })
    })
  }

  async removeAllTags(req: Request, res: Response): Promise<void> {
    const board = req.params.name

    ImageModel.updateMany({ board }, { tags: [] }, function (err, _) {
      if (err) {
        return res.status(500).json({
          success: false,
          errors: 'Error with updating tags',
        })
      }

      ImageModel.find({ board }, function (err, images) {
        if (err) {
          return res.status(500).json({
            success: false,
            errors: 'Some error with images',
          })
        }

        res.status(200).json({
          success: true,
          data: images,
        })
      })
    })
  }

  async addTags(req: Request, res: Response): Promise<void> {
    const board = req.params.name

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.status(403).json({
        success: false,
        errors: errors,
      })
      return
    }

    ImageModel.find({ board }, function (err, images) {
      if (!images) {
        return res.status(404).json({
          success: false,
          errors: 'Board is empty',
        })
      }

      if (err) {
        return res.status(500).json({
          success: false,
          errors: err,
        })
      }

      // TODO: Add types to Observable class
      class Observable {
        listeners: Set<any>
        constructor(exec: any) {
          this.listeners = new Set<any>()
          exec({
            next: (value: any) => this.listeners.forEach(({ next }) => next && next(value)),
            error: (err: any) => this.listeners.forEach(({ error }) => error && error(err)),
            complete: () => this.listeners.forEach(({ complete }) => complete && complete()),
          })
        }
        subscribe(listeners: any) {
          this.listeners.add(listeners)
          return { unsubscribe: () => this.listeners.delete(listeners) }
        }
      }

      //@ts-ignore
      const interval = new Observable(({ next }) => {
        setInterval(() => next(images), 1000)
      })

      let i = -1
      const subscription = interval.subscribe({
        next: (data: ImageDocumentModelInterface[]) => {
          if (i === images.length - 1) {
            console.log('FINISH')
            subscription.unsubscribe()

            ImageModel.deleteMany({ board }, (err) => {
              if (err) {
                return res.status(500).json({
                  success: false,
                  errors: 'Error with deleting old collection',
                })
              }
              ImageModel.insertMany(data, (err, _doc) => {
                if (err) {
                  return res.status(500).json({
                    success: false,
                    errors: 'Error with insert new collection',
                  })
                }

                res.status(200).json({
                  success: true,
                  data: data,
                })
              })
            })
            return
          }
          i++
          console.log(i)
          fetch(`https://api.imagga.com/v2/tags?image_url=${data[i].imageUrl}`, {
            method: 'GET',
            headers: {
              apiKey: process.env.IMAGGA_KEY!,
              apiSecret: process.env.IMAGGA_SECRET!,
              Authorization: process.env.IMAGGA_AUTH!,
            },
          })
            .then((res) => res.json())
            .then((res: ImaggaResponse) => {
              if (res.result) {
                return (data[i].tags = res.result.tags
                  .slice(0, 6)
                  .map((tag) => ({ ...tag, tag: tag.tag.en })))
              } else {
                console.log('error with id: ', data[i]._id)
                data[i].tags = [{ confidence: 100, tag: 'undefined' }]
              }
            })
        },
      })
    })
  }
}

export const ImagesCtrl = new ImagesController()
