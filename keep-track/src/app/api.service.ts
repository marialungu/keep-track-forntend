import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Board} from "./board";
import {Observable} from "rxjs/Observable";
import {Note} from "./note";

@Injectable()
export class ApiService {

  private _BASE_URL =  'https://keep-track.herokuapp.com';
  private  _BOARDS = this._BASE_URL + '/boards';
  private  _NOTES = this._BASE_URL + '/notes';
  private  _DELETE_BOARDS_URL = this._BASE_URL + '/deleteBoard';

  note: Note;
  board: Board;
  deleteBoardIdList: number;
  closeDeleteDialog = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this._BOARDS);
  }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this._NOTES);
  }

  deleteBoards(): Observable<number[]> {
    return this.http.request<number[]>('delete', this._DELETE_BOARDS_URL, { body: this.deleteBoardIdList});
  }
}
