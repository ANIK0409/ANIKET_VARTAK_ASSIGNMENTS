import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdvertisimentFormComponent } from './advertisiment-form/advertisiment-form.component';
import { AdvertisimentTableComponent } from './advertisiment-table/advertisiment-table.component';
//import { routingComponents } from '../../../ASSIGNMENT1/src/app/app-routing.module';

const routes: Routes = [
  {path:'form', component: AdvertisimentFormComponent},
  {path:'table', component:AdvertisimentTableComponent},
  {path:'edit', component:EditProductComponent}
];

export const routingComponents = [AdvertisimentTableComponent,AdvertisimentFormComponent,EditProductComponent];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
