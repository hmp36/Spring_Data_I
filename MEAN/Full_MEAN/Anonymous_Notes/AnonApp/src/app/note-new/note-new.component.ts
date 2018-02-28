import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Note } from '../note';
import { NoteService } from '../note.service';



@Component({
    selector: 'app-note-new',
    templateUrl: './note-new.component.html',
    styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {

    @Output() createNoteEvent = new EventEmitter();

    newNote: any;
    errors: string[] = [];
    constructor(private _ns: NoteService) { }

    ngOnInit() {
        this.newNote = {
            note:""
        };
    }

    createNote() {
        this.errors = [];
        this._ns.create(
            this.newNote,
            note => {
                console.log(note);
                if (note.errors) {
                    for (const key of Object.keys(note.errors)) {
                        const error = note.errors[key];
                        this.errors.push(error.message);
                    }
                    console.log(this.errors);
                } else {
                    this.newNote = {
                        note:""
                    };

                    this.createNoteEvent.emit();
                }
            }
        );
    }

}