import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { RestchainService } from './restchain.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RestaurantComponent,
    MenuComponent,
    UserComponent,
    PageNotFoundComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RestchainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
