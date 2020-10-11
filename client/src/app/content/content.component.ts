import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

import { ApiService } from "../shared/api.service";
import { TImage } from "../shared/boards.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit {
  constructor(private ApiService: ApiService) {}

  public images: Array<TImage> = [];
  public boards = [];
  public selectedBoard = this.boards.length ? this.boards[0] : "default";
  isEdit = false;
  isLoading = false;
  isCreateNewBoardOpen = false;

  newPhotoUrl: FormGroup;
  newBoardTitle: FormGroup;

  addNewPhoto() {
    if (!this.newPhotoUrl.value.text.length) return;
    this.ApiService.sendNewImage(
      this.newPhotoUrl.value.text,
      this.selectedBoard
    ).subscribe((res) => {
      this.ApiService.getBoardImage(this.selectedBoard).subscribe(
        (res) => (this.images = res.data)
      );
    });
    this.newPhotoUrl.reset();
  }

  runTagging() {
    this.ApiService.isLoading.next(true);
    this.ApiService.getTags(this.selectedBoard).subscribe((res) => {
      this.ApiService.isLoading.next(false);
      this.images = res.data;
    });
    this.isEdit = true;
  }

  save() {
    this.isEdit = false;
  }

  cancel() {
    this.ApiService.isLoading.next(true);
    this.ApiService.removeTags(this.selectedBoard).subscribe((res) => {
      this.ApiService.isLoading.next(false);
      this.images = res.data;
      this.isEdit = false;
    });
  }

  changeBoard(id: string) {
    console.log(id);
    this.ApiService.showTheBoard(id).subscribe((res) => {
      this.selectedBoard = res.data.name;
      this.images = res.data.images;
    });
  }

  openPopup() {
    this.isCreateNewBoardOpen = true;
  }

  closePopup() {
    this.isCreateNewBoardOpen = false;
  }

  createNewBoard() {
    if (this.newBoardTitle.value.text.length) {
      this.isCreateNewBoardOpen = false;
      this.ApiService.createNewBoard(this.newBoardTitle.value.text).subscribe(
        (resp) => {
          this.ApiService.getAllBoards().subscribe((res) => {
            this.boards = res.data;
            this.changeBoard(res.data[0]._id);
          });
        }
      );

      this.newBoardTitle.reset();
    }
  }

  ngOnInit() {
    this.ApiService.getBoardImage("default").subscribe(
      (res) => (this.images = res.data)
    );

    this.newPhotoUrl = new FormGroup({
      text: new FormControl("", Validators.required),
    });

    this.newBoardTitle = new FormGroup({
      text: new FormControl("", Validators.required),
    });

    this.ApiService.isLoading.subscribe(
      (isLoading) => (this.isLoading = isLoading)
    );

    this.ApiService.getAllBoards().subscribe((res) => (this.boards = res.data));
  }
}
