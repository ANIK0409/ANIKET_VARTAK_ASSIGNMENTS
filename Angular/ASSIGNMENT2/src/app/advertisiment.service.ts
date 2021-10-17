import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvertisimentService {

  constructor() { }

  advtlist=[
    {"title":"note11","name":"Aniket","category":"Mobile","description":"Redmi note 11 prime"},
    {"title":"wm","name":"Sid","category":"Hardware","description":"washing machine"},
    {"title":"sofa","name":"Aneela","category":"Furniture","description":"Sofa"},
    {"title":"battery","name":"Aniket","category":"Hardware","description":"inverter battery"},
    {"title":"galaxy s8","name":"Sid","category":"Mobile","description":"Samsung galexy S8"},
    {"title":"king","name":"Uma","category":"Furniture","description":"Bed"},
    {"title":"1+4","name":"Aneela","category":"Mobile","description":"OnePlus 4"},
  ];

  getAllAdvertises(){
    return this.advtlist;
  }

  addnewadvt(newadvt:any){
    this.advtlist.push(newadvt);
    alert("New Advertisement Created\n for:\nTitle:"+newadvt.title+"\nname:"+newadvt.name+"\ncategory:"+newadvt.category+"\ndescription:"+newadvt.description);
  }

  deleteAdvertise(deladvt:any){

    let index = this.advtlist.findIndex(x => x == deladvt);
    if(index!=-1){
    this.advtlist.splice(index,1);
    alert('Advertisement Deleted sucessfully');
    }
  }



  public editdata={"title":"","name":"","category":"","description":""};
  public editindex:any;
  editThis(data:any){
    this.editdata = data;
    var index = this.advtlist.findIndex(x => x==data);
    this.editindex = index;
    }

  updateAdvertise(updates:any){
    this.advtlist[this.editindex].title=updates.title;
    this.advtlist[this.editindex].name=updates.name;
    this.advtlist[this.editindex].category=updates.category;
    this.advtlist[this.editindex].description=updates.description;
    console.log(this.advtlist[this.editindex]);
  }
  

  
}
