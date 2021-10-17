import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvertisimentFormComponent } from './advertisiment-form/advertisiment-form.component';
import { AdvertisimentTableComponent } from './advertisiment-table/advertisiment-table.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdvertisimentService } from './advertisiment.service';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisimentFormComponent,
    AdvertisimentTableComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AdvertisimentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
