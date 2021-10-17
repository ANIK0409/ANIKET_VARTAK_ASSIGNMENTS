import { Component, OnInit } from '@angular/core';
import { AdvertisimentService } from '../advertisiment.service';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Advt } from '../advt';

@Component({
  selector: 'app-edit-product',
  templateUrl:'./edit-product.component.html',
  /*template: `
    <p>
      edit-product works!
    </p>
  `,*/
  styles: [
  ]
})
export class EditProductComponent implements OnInit {

  constructor(private _advertisimentService : AdvertisimentService) { }


  ngOnInit(): void {
  }

  public update = this._advertisimentService.editdata;

  @Output() cancel = new EventEmitter();
  canceledit(){
  this.cancel.emit();
  }

  public isUpdate1:boolean=false;
  public change1(){this.isUpdate1=true;}
  public cancelchange1(){this.isUpdate1=false;}

  public isUpdate2:boolean=false;
  public change2(){this.isUpdate2=true;}
  public cancelchange2(){this.isUpdate2=false;}

  public isUpdate3:boolean=false;
  public change3(){this.isUpdate3=true;}
  public cancelchange3(){this.isUpdate3=false;}

  public isUpdate4:boolean=false;
  public change4(){this.isUpdate4=true;}
  public cancelchange4(){this.isUpdate4=false;}


  public myName:string="Aniket";
  public category = ["Mobile","Hardware","Furniture"];
  public test = (this.update);
  public caterr=false;
  public validatecat(value:any){
    if(value=="default"){
      this.caterr=true;
    }
    else{
      this.caterr=false;
    }
  }

  newchange(){

    if (confirm('Are you sure you want to update this advertisement?')) {
      this._advertisimentService.updateAdvertise(this.test);
    this.cancel.emit();
    } 
  }

}
