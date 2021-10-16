import { Component, OnInit } from '@angular/core';
import { RestchainService } from '../restchain.service';


@Component({
  selector: 'app-user',
  template: `
    
    <div *ngIf="rest">
      <h3>choose your Favourite Restaurant</h3>
      <ul *ngFor="let items of restlist">
        <li (click)=restselect(items.rest)>{{items.rest}}</li>
      </ul>
    </div>

    <div *ngIf="menu">
    <h3>Choose your favourite dish</h3>
      <ul *ngFor="let item of menulist">
        <li *ngIf="item.rest===restname" (click)=menuselect(item.menu,item.price)>{{item.menu}}<span>  {{item.price |currency:'INR'}}</span></li>
      </ul>
      <br>
      <button (click)=backtorest()>Back</button>
    </div>

    <div *ngIf="final">
    <h3>Yeah!! Great Choice !</h3>
      <h4>{{menuname}}</h4>
      <h4>from {{restname}}</h4>
      <h4>worth {{price | currency:'INR'}}</h4>
      <br>
      <button (click)=backtomenu()>Back</button>
      <button (click)=finalorder()>Place Order</button>
    </div>

    <div *ngIf="summary">
      <form >
      <h4>Order Summary</h4>
      <h4>Menu : {{menuname}}</h4>
      <h4>From : {{restname}}</h4>
      Enter your Name: <br>
      <input #name type='text' required><br><br>
      Enter Email address:<br>
      <input #email type='email'required><br><br>
      Enter Contact Number:<br>
      <input #contact type="tel" pattern="[0-9]{10}" required><br><br>
      Enter Delivery Address:<br>
      <textarea #address width=200px height=100px required></textarea><br><br>
      <input class="sub" type='submit' value="Order" (click)=popup(name.value,email.value,contact.value,address.value)>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor(private _localrestchain : RestchainService) { }

  public restlist = this._localrestchain.getrestlist();
  public menulist = this._localrestchain.getmenulist();

  public rest = true;
  public restname:any;
  public menu = false;
  public menuname:any;
  public final = false;
  public summary = false;
  public price:any;

  ngOnInit(): void {
  }

  restselect(restname:any){
    this.rest = false;
    this.restname = restname;
    this.menu = true;
    

  }

  backtorest(){
    this.rest = true;
    this.menu = false;
  }

  menuselect(menuitem:any,cost:any){
    this.rest = false;
    this.menu = false;
    this.final = true;
    this.menuname = menuitem;
    this.price = cost;

  }

  backtomenu(){
    this.final = false;
    this.menu = true;
  }

  finalorder(){
    this.final = false;
    this.summary = true;

  }

  popup(name:any,email:any,contact:any,address:any){
    if(name!="" && email!="" && contact!="" && address!=""){
    alert("ORDER PLACED\nfor"+this.menuname+"from"+this.restname+"\n to "+name+"\nemail :"+email+"\ncontact number: "+contact+"\nAddress :"+address);
    this.summary=false;
    this.final=false;
    this.menu = true;
    }
  }

}
