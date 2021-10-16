import { Component, OnInit } from '@angular/core';
import { RestchainService } from '../restchain.service';


@Component({
  selector: 'app-admin',
  template: `
    <p>
      ADMIN / OWNER LOGIN
    </p>
    <div *ngIf="!isadmin || isowner;then elseblock;else thenblock"></div>
    
    <ng-template #thenblock>
      
    <p>Enter ID  :</p><input #admid type='text'><br>
    <p>Enter Password :</p><input #admpass type='password'><br>
          <button (click)=adminlogin(admid.value,admpass.value)>LOGIN</button>
        
    </ng-template>

    <ng-template #elseblock>
      <button routerLink = "/restaurant">Restaurants</button>
      <button (click)=logout()>Logout</button>
    </ng-template>
  `,
  styles: [
  ]
})
export class AdminComponent implements OnInit {

  constructor(private _localrestchain : RestchainService) { }

  public isadmin:any;
  public isowner=false;

  ngOnInit(): void {
    this.isadmin = this._localrestchain.isadmin();
    this.isowner = this._localrestchain.isowner();
    console.log(this.isadmin,"\t",typeof(this.isadmin))
  }
  
  adminlogin(id:string,pass:string){
    if(this._localrestchain.checkadmincred(id,pass)){
    this._localrestchain.admintrue();
    this.isadmin = this._localrestchain.isadmin();
    } 
    if(this._localrestchain.checkownercred(id,pass)){
      let rests = this._localrestchain.getrestlist();
      for(let items of rests){
        if(items.owner == id){
        console.log("owner",id);
        this._localrestchain.ownertrue();
        this._localrestchain.setownername(id);
        break;
        }
      }
      this.isowner = this._localrestchain.isowner();
      console.log("owner",this.isowner);
    }
  }

  adminrest(){

  }

  logout(){
    this._localrestchain.logout();
    this.isowner = this._localrestchain.isowner();
    this.isadmin = true;
    this.isowner = this._localrestchain.isowner();
  }

}
