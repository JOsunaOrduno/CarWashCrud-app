import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarAddEditComponent } from './car-add-edit/car-add-edit.component';
//import { CarDisplayComponent } from './car-display/car-display.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-app';
  readonly APIUrl = "http://localhost:3000/api/"
  
  constructor(
    private http: HttpClient,
    private _dialog: MatDialog

    ){}

    /*notes: any = [];
    refreshNotes(){
      this.http.get(this.APIUrl + 'GetNotes').subscribe(data => {
        this.notes = data;
      })
    }
    ngOnInit(){
      this.refreshNotes();
    }*/

  openAddEditCarForm(){
    this._dialog.open(CarAddEditComponent)
  }
}

