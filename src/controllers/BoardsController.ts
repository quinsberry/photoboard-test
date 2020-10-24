import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import { BoardModel, BoardModelInterface } from '../models/BoardModel'
import { ImageModel } from '../models/ImageModel'

class BoardsController {
  async create(req: Request, res: Response): Promise<void> {
    const data: BoardModelInterface = {
      name: req.body.name,
      images: [],
    }

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.status(403).json({
        success: false,
        errors: errors,
      })
      return
    }

    BoardModel.create<BoardModelInterface>(data, function (err, boards) {
      if (err) {
        return res.status(500).json({
          success: false,
          errors: err,
        })
      }

      res.status(201).json({
        success: true,
        data: boards,
      })
    })
  }

  async all(_req: Request, res: Response): Promise<void> {
    BoardModel.find({}, function (err, boards) {
      if (err) {
        return res.status(500).json({
          success: false,
          errors: err,
        })
      }

      res.status(200).json({
        success: true,
        data: boards.map((board) => ({ _id: board._id, name: board.name })),
      })
    })
  }

  async show(req: Request, res: Response): Promise<void> {
    const id = req.params.id
    BoardModel.findOne({ _id: id }, function (err, board) {
      if (!board) {
        return res.status(404).json({
          success: false,
          errors: 'Cannot find the board',
        })
      }

      if (err) {
        return res.status(500).json({
          success: false,
          errors: 'Something wrong with boards',
        })
      }

      ImageModel.find({ board: board.name }, function (_error, images) {
        let data = board
        data.images = images
        res.status(200).json({
          success: true,
          data,
        })
      })
    })
  }
}

export const BoardsCtrl = new BoardsController()
