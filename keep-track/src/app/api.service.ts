import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Board} from "./board";
import {Observable} from "rxjs/Observable";
import {Note} from "./note";

@Injectable()
export class ApiService {

  private _BASE_URL =  'https://keep-track.herokuapp.com';
  private  _BOARDS = this._BASE_URL + '/boards';
  private  _NOTES = this._BASE_URL + '/notes';

  constructor(private http: HttpClient) {}

  board: Board[];

  getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this._BOARDS);
  }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this._NOTES);
  }
}
