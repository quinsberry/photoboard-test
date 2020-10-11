import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { take } from "rxjs/operators";
import { ApiService } from "./api.service";

export type TImage = {
  _id: string;
  board: string;
  imageUrl: string;
  tags: Array<string>;
};

export interface IBoard {
  _id: string;
  images: Array<TImage>;
}

export class BoardsService {
  constructor(private ApiService: ApiService) {}

  public selectedBoard = new BehaviorSubject<string>("default");
  public boards = new BehaviorSubject<Array<IBoard>>([]);

  ngOnInit() {}
}
