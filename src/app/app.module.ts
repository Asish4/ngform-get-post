import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ShowComponent,
    AddComponent,


  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, DataTablesModule],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule { }
