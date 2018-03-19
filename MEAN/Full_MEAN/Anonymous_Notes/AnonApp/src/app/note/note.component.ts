import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService } from '../note.service';
@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class NoteComponent implements OnInit {

    note = { note: "" };
    notes = []

    constructor(private _NoteService: NoteService) {
        
    }

    ngOnInit() {
        this.getAll();
    }

    onSubmit() {
        // console.log("hitting the component service ");
        // this._NoteService.create(this.note).subscribe(
        //     note => 
        // )
        
        this._NoteService.create(this.note, (res) => {
            // this.getAll();
            console.log("NOTE: ", this.note);
            
            // this.note = { note: "" };
        })
    }

    getAll() {
        this._NoteService.all((res) => {
            this.notes = res.json();
            console.log(this.notes)
            
        })
    }

}