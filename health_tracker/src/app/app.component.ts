import { Component } from '@angular/core';
import { HeaderComponent } from './dashboard/header/header.component'; 
import { SidebarComponent } from './dashboard/sidebar/sidebar.component'; 
import { MainContentComponent } from './dashboard/main-content/main-content.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'health_tracker';
}
