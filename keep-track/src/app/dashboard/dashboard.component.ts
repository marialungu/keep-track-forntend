import { Component, OnInit } from '@angular/core';
import {Board} from "../board";
import {ApiService} from "../api.service";
import {Note} from "../note";
import {MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA} from "@angular/material";
import {ViewNoteComponent} from "./view-note/view-note.component";
import {ConfirmDeleteComponent} from "./confirm-delete/confirm-delete.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allBoards: Board[];
  allNotes: Note[];

  constructor(public apiService: ApiService, public dialog: MatDialog) { }

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

  openDialog(note: Note): void {
    this.apiService.note = note;
    // this.apiService.closeDialog.subscribe(result => this.dialog.closeAll());
    const dialogRef = this.dialog.open(ViewNoteComponent, {});
  }

  onDelete(board: Board) {
    this.apiService.board = board;
    this.apiService.deleteBoardIdList = null;

    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
    });
  }

  ngOnInit() {
    this.getAllBoards();
    this.getAllNotes();

    this.apiService.closeDeleteDialog.subscribe(bool => {
      if (bool) {
        this.apiService.deleteBoardIdList = this.apiService.board.boardId;
        this.apiService.deleteBoards().subscribe(result => {
            this.getAllBoards();
            this.dialog.closeAll();
          },
          error => {
          });
      } else {
        this.dialog.closeAll();
      }
    });
  }


}
