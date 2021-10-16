import { Component, OnInit } from '@angular/core';
import { RestchainService } from '../restchain.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-restaurant',
  template: `
    <h3>
      OUR RESTAURANTS 
    </h3>
    <div *ngIf="isowner;then owner;else notowner"></div>
    <ng-template #owner>
      <div *ngFor="let restaurant of rest">
      <ul *ngIf="restaurant.owner===ownername">
        <li (click)=restselect(restaurant)>Restaurant name:{{restaurant.rest}}<span> Reataurant Owner:{{restaurant.owner}} </span></li>
      </ul>
      </div>
    </ng-template>

    <ng-template #notowner>
      <ul *ngFor="let restaurant of rest">
        <li (click)=restselect(restaurant)>Restaurant name:{{restaurant.rest}}<span> Reataurant Owner:{{restaurant.owner}} </span></li>
      </ul>
    </ng-template>

    <!--
    <ul *ngFor="let restaurant of rest">
      <li (click)=restselect(restaurant)>Restaurant name:{{restaurant.rest}}<span> Reataurant Owner:{{restaurant.owner}} </span></li>
    </ul>
    -->

    <div *ngIf="isadmin;else thenblock"></div>
    <ng-template #thenblock>
    
      <br><br>
      <div>
        Enter Restaurant Name:<br>
        <input #newrestname type='text'>
        <br>
        Enter Owner Name:<br>
        <input #newrestownname type='text'>
        <br>
        <button (click)=addnewrest(newrestname.value,newrestownname.value)>Add New Restaurant</button>
      </div>
        <br><br>
      <div>
        Enter Restaurant Name:<br>
        <input #oldrestname type='text'>
        <br>
        Enter Owner Name:<br>
        <input #oldrestownname type='text'>
        <br>
        Enter change in Restaurant Name:<br>
        <input #newrest type='text'>
        <br>
        Enter chnage in Owner Name:<br>
        <input #newrestown type='text'>
        <br>
        <button (click)=changerestdata(oldrestname.value,oldrestownname.value,newrest.value,newrestown.value)>Change Restaurant Data</button>
      </div>
        <br><br>
      <div>
        Enter Restaurant Name:<br>
        <input #rname type='text'>
        <br>
        Enter Owner Name:<br>
        <input #oname type='text'>
        <br>
        <button (click)=removerest(rname.value,oname.value)>Remove Restaurant</button>
      </div>
      </ng-template>

      <button routerLink="./../admin">Back</button>

    
  `,

})
export class RestaurantComponent implements OnInit {

  constructor(private _localrestchain : RestchainService,private router:Router) { }

  public rest:any;
  public isadmin:any;
  ngOnInit(): void {
    this.isadmin = this._localrestchain.isadmin();
    this.rest = this._localrestchain.getrestlist();
  }
  public isowner = this._localrestchain.isowner();
  public ownername = this._localrestchain.getownername();
  

  addnewrest(newrest:any,newown:any){
    let onedata = {"owner":newown,"rest":newrest};
    this._localrestchain.addnewrest(onedata);
  }

  changerestdata(oldrestname:any,oldowner:any,newrestname:any,newowner:any){
    this._localrestchain.changerest(oldrestname,oldowner,newrestname,newowner);
  }

  removerest(rname:any,oname:any){
    this._localrestchain.removerest(rname,oname);
  }

  restselect(rest:any){
    this.router.navigate(['./menu',rest.rest]);
   
  }



  


  
}
