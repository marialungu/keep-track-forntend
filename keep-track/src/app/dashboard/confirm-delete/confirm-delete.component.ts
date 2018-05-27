import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  onConfirm() {
    this.apiService.closeDeleteDialog.emit(true);
  }

  onClose() {
    this.apiService.closeDeleteDialog.emit(false);
  }

}
