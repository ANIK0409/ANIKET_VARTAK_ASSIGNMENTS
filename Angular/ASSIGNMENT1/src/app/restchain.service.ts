import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RestchainService {

  constructor() { }

  public restlist = [
    {"owner":"RAJU","rest":"CAFE BOLLYWOOD"},
    {"owner":"RAJU","rest":"FINE DINE"},
    {"owner":"RAJU","rest":"INDIA BISTRO"},

    {"owner":"BABURAO","rest":"ROOFTOP RESORT"},
    {"owner":"BABURAO","rest":"HOTEL BRITANIA"},
    {"owner":"BABURAO","rest":"DINE GALEXY"},
   
    {"owner":"SHYAM","rest":"SIZZLER"},
    {"owner":"SHYAM","rest":"SALT AND PEPPER"},

    {"owner":"KANTAPRASAD","rest":"BABA_KA_DHABA"}
  ];

  public menulist = [
    
{"rest":"CAFE BOLLYWOOD","menu":"SANDWICH","price":100},
{"rest":"CAFE BOLLYWOOD","menu":"GARLIC BREAD","price":80},
{"rest":"CAFE BOLLYWOOD","menu":"FRENCH FRIES","price":150},
{"rest":"CAFE BOLLYWOOD","menu":"VEG BURGER","price":100},
{"rest":"CAFE BOLLYWOOD","menu":"NON-VEG BURGER","price":150},
{"rest":"CAFE BOLLYWOOD","menu":"COLD FOFFEE","price":120},
{"rest":"CAFE BOLLYWOOD","menu":"COLA","price":70},    

{"rest":"FINE DINE","menu":"VEG THAALI","price":350},
{"rest":"FINE DINE","menu":"NON-VEG THAALI","price":450},
{"rest":"FINE DINE","menu":"PANEER TIKKA","price":250},
{"rest":"FINE DINE","menu":"PALAK PANEER","price":250},
{"rest":"FINE DINE","menu":"CHICKEN KADHAI","price":300},

{"rest":"INDIA BISTRO","menu":"SAMOSA","price":50},
{"rest":"INDIA BISTRO","menu":"VADA PAV","price":40},
{"rest":"INDIA BISTRO","menu":"KACHORI","price":60},
{"rest":"INDIA BISTRO","menu":"DHOKLA","price":80},
{"rest":"INDIA BISTRO","menu":"BHAJJI","price":80},
{"rest":"INDIA BISTRO","menu":"LASSI","price":80},

{"rest":"ROOFTOP RESORT","menu":"ANDA CURRY","price":150},
{"rest":"ROOFTOP RESORT","menu":"BUTTER NAAN","price":35},
{"rest":"ROOFTOP RESORT","menu":"TANDOORI NAAN","price":50},
{"rest":"ROOFTOP RESORT","menu":"CHICKEN CURRY","price":250},
{"rest":"ROOFTOP RESORT","menu":"MUTTUN CURRY","price":450},
{"rest":"ROOFTOP RESORT","menu":"CHICKEN NIGGETS","price":250},

{"rest":"HOTEL BRITANIA","menu":"MASALA CHAI","price":30},
{"rest":"HOTEL BRITANIA","menu":"LATTE COFFEE","price":60},
{"rest":"HOTEL BRITANIA","menu":"COLD COFFEE","price":50},
{"rest":"HOTEL BRITANIA","menu":"ALOO PATTICE","price":50},
{"rest":"HOTEL BRITANIA","menu":"CHOCOLATE PASTERY","price":80},
{"rest":"HOTEL BRITANIA","menu":"PINEAPPLE PASTERY","price":70},

{"rest":"DINE GALEXY","menu":"CHICKEN LASAGNE","price":200},
{"rest":"DINE GALEXY","menu":"WHITE SAUSE PAASTA","price":200},
{"rest":"DINE GALEXY","menu":"PINK SAUSE PAASTA","price":180},
{"rest":"DINE GALEXY","menu":"CHEESE LOADED PAASTA","price":350},
{"rest":"DINE GALEXY","menu":"HAKKA NOODELS","price":150},
{"rest":"DINE GALEXY","menu":"CHICKEN SOUP","price":120},

{"rest":"SIZZLER","menu":"PRAWNS FRY","price":450},
{"rest":"SIZZLER","menu":"CRAB CURRY","price":400},
{"rest":"SIZZLER","menu":"POMFRET FRY","price":500},
{"rest":"SIZZLER","menu":"BOMBIL FRY","price":350},
{"rest":"SIZZLER","menu":"FISH CURRY","price":350},

{"rest":"SALT AND PEPPER","menu":"TRIPLE NOODELS(VEG)","price":150},
{"rest":"SALT AND PEPPER","menu":"TRIPLE RICE(VEG)","price":150},
{"rest":"SALT AND PEPPER","menu":"TRIPLE NOODELS(NON-VEG)","price":200},
{"rest":"SALT AND PEPPER","menu":"TRIPLE RICE(NON-VEG)","price":200},
{"rest":"SALT AND PEPPER","menu":"HAKKA NOODELS","price":250},
{"rest":"SALT AND PEPPER","menu":"CHICKEN CHILI","price":200},
{"rest":"SALT AND PEPPER","menu":"PANEER CHILI","price":200},

{"rest":"BABA_KA_DHABA","menu":"ALOO CHHOLE","price":250},
{"rest":"BABA_KA_DHABA","menu":"CHHOLE BHATURE","price":200},
{"rest":"BABA_KA_DHABA","menu":"RAAJMA CHAWAL","price":350},
{"rest":"BABA_KA_DHABA","menu":"DAAL ROTI","price":250},
{"rest":"BABA_KA_DHABA","menu":"DAAL CHAWAL","price":250},
{"rest":"BABA_KA_DHABA","menu":"MUTTER PANEER","price":400},
{"rest":"BABA_KA_DHABA","menu":"MASALA CHAI","price":50}
  ];

  public adminlist = [
    {"id":"admin","pass":"admin"}
  ];

  public ownerlist = [
    {"id":"RAJU","pass":"RAJU"},
    {"id":"BABURAO","pass":"BABURAO"},
    {"id":"SHYAM","pass":"SHYAM"},
    {"id":"KANTAPRASAD","pass":"KANTAPRASAD"}
  ]

  public logger:any;

  checkadmincred(id:any,pass:any){
    for(let i = 0;i<this.adminlist.length;i++){
      if(this.adminlist[i].id==id && this.adminlist[i].pass==pass){
      this.logger = id;
        
        return true;}
    }
    return false;
  }

  checkownercred(id:any,pass:any){
    for(let i = 0;i<this.ownerlist.length;i++){
      if(this.ownerlist[i].id==id && this.ownerlist[i].pass==pass){
        this.logger=id;
      return true;}
    }
    return false;
  }


  getmenulist(){
    return this.menulist;
  }
  getrestlist(){
    return this.restlist;
  }

  addnewrest(newrest:any){
    this.restlist.push(newrest);
  }

 changerest(namefrom:any,ownnamefrom:any,nameto:any,ownnameto:any){
    var index = this.restlist.findIndex(x => x.rest===namefrom && x.owner===ownnamefrom);
    if(index!=-1){
    this.restlist[index].rest=nameto;
    this.restlist[index].owner=ownnameto
    }
    else{
      console.log("no restaurant match found");
    }
  }



  removerest(restname:string,restowner:string){
    let index = this.restlist.findIndex(x => x.rest===restname && x.owner===restowner );
    //console.log(index);
    //if(this.testlist[index].name===data || index!=-1){
    if(index!=-1){
    this.restlist.splice(index,1);
    }
    else{
      console.log("NO NAME FOUND")
    }
    console.log("after remove operation \n",this.restlist,"\t",index)
  }





  addnewmenu(newrest:any){
    this.menulist.push(newrest);
  }

  removemenu(restname:string,menu:string){
    let index = this.menulist.findIndex(x => x.rest===restname && x.menu===menu );
    if(index!=-1){
    this.menulist.splice(index,1);
    }
    else{
      console.log("NO NAME FOUND")
    }
    console.log("after remove operation \n",this.menulist,"\t",index)
  }


  changeitem(rest1:any,olditem:any,rest2:any,newitem:any,newcost:any){
    var index = this.menulist.findIndex(x => x.rest===rest1 && x.menu===olditem);
    if(index!=-1){
    this.menulist[index].rest=rest2;
    this.menulist[index].menu=newitem;
    this.menulist[index].price=newcost;
    }
    else{
      console.log("no restaurant match found");
    }
  }

  public admin = true;

  isadmin(){
    return this.admin;
  }

  admintrue(){
    this.admin=false;
  }

  public owner = false;
  isowner(){
    return this.owner
  }

  ownertrue(){
    this.owner = true;
  }

  logout(){
    this.admin = true;
    this.owner = false;
    this.logger = "";
  }

  getlogger(){
    return this.logger;
    console.log("logg",this.logger);
  }

  public ownername:any;
  setownername(name:any){this.ownername = name;}
  getownername(){return this.ownername;}

}
