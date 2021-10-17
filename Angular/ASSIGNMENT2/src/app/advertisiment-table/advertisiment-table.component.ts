import { Component, OnInit } from '@angular/core';
import { AdvertisimentService } from '../advertisiment.service';
import { Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-advertisiment-table',
  templateUrl:"./advertisiment-table.component.html",
  /*template: `
    <p>
      advertisiment-table works!
    </p>
  `,*/
  styles: [
  ]
})
export class AdvertisimentTableComponent implements OnInit {

  constructor(private  _advertisimentService:AdvertisimentService) { }

  ngOnInit(): void {
  }

  public advt = this._advertisimentService.getAllAdvertises();

  deletethis(add:any){
    if (confirm('Are you sure you want to delete this advertisement from the database?')) {
      this._advertisimentService.deleteAdvertise(add);
    } 
  }

  public edit=false;
  editthis(del:any){
    this._advertisimentService.editThis(del);
    this.edit=true;
  }

  noedit(){ this.edit = false}

  @Output() cancell = new EventEmitter()
  formagain()
  {
    this.cancell.emit()
  }

}
