import { Component, OnInit } from '@angular/core';
import {Board} from "../board";
import {ApiService} from "../api.service";
import {Note} from "../note";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allBoards: Board[];
  allNotes: Note[];

  constructor(public apiService: ApiService) { }

  getAllBoards(): void{
    this.apiService.getAllBoards()
      .subscribe(
        result => {
          this.allBoards = result;
        }
      );
  }

  getAllNotes(): void{
    this.apiService.getAllNotes()
      .subscribe(
        result => {
          this.allNotes = result;
        }
      );
  }

  ngOnInit() {
    this.getAllBoards();
    this.getAllNotes();
  }


}
