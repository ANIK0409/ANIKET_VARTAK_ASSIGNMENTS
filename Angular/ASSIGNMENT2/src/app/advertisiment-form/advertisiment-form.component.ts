import { Component, OnInit } from '@angular/core';
import { Advt } from '../advt';
import { AdvertisimentService } from '../advertisiment.service';


@Component({
  selector: 'app-advertisiment-form',
  templateUrl:"advertisiment-form.component.html",
  /*template: `
    <p>
      advertisiment-form works!
    </p>
  `,*/
  styles: [
  ]
})
export class AdvertisimentFormComponent implements OnInit {

  public myName:string="Aniket";
  public category = ["Mobile","Hardware","Furniture"];
  public test = new Advt('',"Aniket",'default','');

  public caterr:boolean=true
  public validatecat(value:any){
    if(value=="default"){
      this.caterr=true;
    }
    else{
      this.caterr=false;
    }
  }

  constructor(private _advertisimentService: AdvertisimentService) { }

  ngOnInit(): void {
  }


  public submitOnce:boolean=false;
  onSubmit(){
    this._advertisimentService.addnewadvt(this.test);
    this.submitOnce = true;
  }

  public alreadysubmitted = false;
  public submitagain(){
    this.submitOnce=false; 
    this.test = new Advt('',"Aniket",'default','');
    this.alreadysubmitted = true;
  }

  backtotable()
  {this.submitOnce=true;}

}
