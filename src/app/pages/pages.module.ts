import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { UserLabelComponent } from './components/user-label/user-label.component';
import { UserLogoutComponent } from './components/user-logout/user-logout.component';


@NgModule({
  declarations: [PagesComponent, HomeComponent, UserLabelComponent, UserLogoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
