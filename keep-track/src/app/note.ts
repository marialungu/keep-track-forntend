import {NoteItem} from "./note-item";

export class Note {
  noteId: number;
  boardId: number;
  noteName: string;
  noteContent: NoteItem;
  noteCreatedAt: string;
}
