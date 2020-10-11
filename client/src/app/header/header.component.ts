import { Component, OnInit } from "@angular/core";
import { ApiService } from "../shared/api.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private ApiService: ApiService) {}

  isLoading = false;

  ngOnInit() {
    this.ApiService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
