import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    MainContentComponent,
    SidebarComponent,
  ]
})
export class DashboardModule { }
