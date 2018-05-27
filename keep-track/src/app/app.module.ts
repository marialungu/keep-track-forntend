import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MaterialModule} from "./material.module";
import { SideMenuComponent } from './side-menu/side-menu.component';
import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";
import { ViewNoteComponent } from './dashboard/view-note/view-note.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ConfirmDeleteComponent } from './dashboard/confirm-delete/confirm-delete.component';

const appRoutes: Routes = [
  {
    path: 'boards',
    component: DashboardComponent,
    data: {
      title: 'My boords'
    }
  },
  {
    path: '',
    redirectTo: '/boards',
    data: { title: 'Home' },
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideMenuComponent,
    ViewNoteComponent,
    ConfirmDeleteComponent
  ],
  entryComponents: [
    DashboardComponent,
    ViewNoteComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
