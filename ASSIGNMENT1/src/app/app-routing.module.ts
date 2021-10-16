import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: "",redirectTo:'/restaurant',pathMatch:"full"},
  {path:'admin', component:AdminComponent},
  {path:'restaurant',component:RestaurantComponent},
  {path:'menu/:rest', component:MenuComponent},
  {path:'user', component:UserComponent},
  {path:'**', component:PageNotFoundComponent}
];

export const routingComponents = [
  RestaurantComponent,
  AdminComponent,
  MenuComponent,
  UserComponent,
  PageNotFoundComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
