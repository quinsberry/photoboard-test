import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
// import { TImage, IBoard } from "./boards.service";

export type TImage = {
  _id: string;
  board: string;
  imageUrl: string;
  tags: Array<string>;
};

export interface IBoard {
  _id: string;
  name: string;
  images: Array<TImage>;
}

type Response<D> = {
  data: D;
  success: boolean;
};

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public isLoading = new BehaviorSubject<boolean>(false);
  // private apiUrl = "http://localhost:3001" // dev
  private apiUrl = "http://photoboard-test.eu-4.evennode.com";

  getAllImages() {
    return this.http.get<Response<TImage[]>>(`${this.apiUrl}/api/images`);
  }

  getBoardImage(boardName: string = "default") {
    return this.http.get<Response<TImage[]>>(
      `${this.apiUrl}/api/images/board?name=${boardName}`
    );
  }

  getTags(boardName: string = "default") {
    return this.http.get<Response<TImage[]>>(
      `${this.apiUrl}/api/images/board/${boardName}`
    );
  }

  removeTags(boardName: string = "default") {
    return this.http.delete<Response<TImage[]>>(
      `${this.apiUrl}/api/images/board/${boardName}`
    );
  }

  sendNewImage(imageUrl: string, board: string = "default") {
    const obj = {
      imageUrl,
      board,
      tags: [],
    };
    return this.http.post<Response<TImage[]>>(`${this.apiUrl}/api/images`, obj);
  }

  createNewBoard(boardName: string) {
    return this.http.post<Response<IBoard>>(`${this.apiUrl}/api/boards`, {
      name: boardName,
    });
  }

  showTheBoard(id: string) {
    return this.http.get<Response<IBoard>>(`${this.apiUrl}/api/boards/${id}`);
  }

  getAllBoards() {
    return this.http.get<Response<IBoard[]>>(`${this.apiUrl}/api/boards`);
  }
}
