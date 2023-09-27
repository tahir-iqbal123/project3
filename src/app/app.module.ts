import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { Notification1Component } from './notification1/notification1.component';
import { Notification2Component } from './notification2/notification2.component';
import { Notification3Component } from './notification3/notification3.component';
import { SearchComponent } from './search/search.component';
import { Notification4Component } from './notification4/notification4.component';
import { Search2wayComponent } from './search2way/search2way.component';
import { FormsModule } from '@angular/forms';
import { Notification5Component } from './notification5/notification5.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    ContentComponent,
    Notification1Component,
    Notification2Component,
    Notification3Component,
    SearchComponent,
    Notification4Component,
    Search2wayComponent,
    Notification5Component,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
