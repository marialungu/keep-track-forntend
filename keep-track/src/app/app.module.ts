import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MaterialModule} from "./material.module";
import { SideMenuComponent } from './side-menu/side-menu.component';
import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";

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
    SideMenuComponent
  ],
  // entryComponents: [
  //   DashboardComponent
  // ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
