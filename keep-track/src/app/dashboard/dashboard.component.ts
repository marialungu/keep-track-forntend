import { Component, OnInit } from '@angular/core';
import {Board} from "../board";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allBoards: Board[];

  constructor(public apiService: ApiService) { }

  getAllBoards(): void{
    this.apiService.getAllBoards()
      .subscribe(
        result => {
          this.allBoards = result;
          console.log('im here');
        }
      );
  }

  ngOnInit() {
    this.getAllBoards();
  }


}
