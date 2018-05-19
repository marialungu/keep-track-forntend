import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MaterialModule} from "./material.module";
import { SideMenuComponent } from './side-menu/side-menu.component';

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
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
