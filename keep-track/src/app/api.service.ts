import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Board} from "./board";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {

  private _BASE_URL =  'https://keep-track.herokuapp.com';
  private  _BOARDS = this._BASE_URL + '/boards';

  constructor(private http: HttpClient) {}

  board: Board[];

  getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this._BOARDS);
  }
}
