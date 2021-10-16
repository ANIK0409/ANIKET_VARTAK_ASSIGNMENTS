import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestchainService } from '../restchain.service';

@Component({
  selector: 'app-menu',
  template: `
   
    <h3>MENU of {{restname}}</h3>

    <div >
      <ul *ngFor = "let items of menus">
        <li *ngIf = "items.rest===restname">{{items.menu}}<span> {{items.price|currency:'INR'}}</span></li>
      </ul>
    </div>

    <br>


    <div *ngIf="!isadmin;then thenblock"></div>
    <ng-template #thenblock>
      <br><br>
      <div>
        <p>Enter Menu Item:</p><input #addmenu type='text'>
        <br>
        <p>Enter Item Price:</p><input #addprice type='text'>
        <br>
        <button (click)=addtomenu(addmenu.value,addprice.value)>ADD NEW ITEM</button>
      </div>

      <br><br>
      <div>
      <p>Enter Menu Item:</p><input #delmenu type='text'>
        <br>
        <button (click)=delfrommenu(delmenu.value)>REMOVE ITEM</button>
      </div>

      <br><br>
      <div>
        <p>Enter Menu Item:</p><input #oldmenu type='text'>
        <br>
        <p>Enter New Menu Item:</p><input #newmenu type='text'>
        <br>
        <p>Enter New Item cost:</p><input #newrate type='text'>
        <br>
        <button (click)=changemenu(oldmenu.value,newmenu.value,newrate.value)>Change Menu Item</button>
      </div>
      </ng-template>

      <button routerLink="../../restaurant">BACK</button>


    
  `,
  styles: [
  ]
})


export class MenuComponent implements OnInit {

  public restname:any;

  public menus:any;

  constructor(private route:ActivatedRoute,private _localrestchain : RestchainService) { }
  public isadmin:any;
  ngOnInit(): void {
    let rest = (this.route.snapshot.paramMap.get('rest'));
    this.restname = rest;
    this.menus = this._localrestchain.getmenulist();
    console.log(this.menus);
    this.isadmin = this._localrestchain.isadmin();
    
  }

  addtomenu(newitem : any,newcost:any){
    let onedata = {"rest":this.restname,"menu":newitem,"price":newcost};
    console.log(onedata);
    this._localrestchain.addnewmenu(onedata);
  }

  delfrommenu(delitem:any){
    this._localrestchain.removemenu(this.restname,delitem);
  }

  changemenu(ogitem:any,cgitem:any,cgcost:any){
    this._localrestchain.changeitem(this.restname,ogitem,this.restname,cgitem,cgcost);
  }

}
