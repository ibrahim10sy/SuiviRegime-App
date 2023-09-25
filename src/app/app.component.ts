import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suiviRegime';

  isRepasPage : boolean = false;
  isJournalPage : boolean = false;
  isListeSuiviPage : boolean = false;
  isBlankPage: boolean = false;
  isPlaningPage : boolean = false;

  constructor(private router: Router){

    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        this.isBlankPage = event.url === '';
      }

      if (event instanceof NavigationEnd) {
        this.isRepasPage = event.url === '/repaspage';
      }

      if (event instanceof NavigationEnd) {
        this.isJournalPage = event.url === '/journal';
      }
     
      if (event instanceof NavigationEnd) {
        this.isListeSuiviPage = event.url === '/liste';
      }
      if (event instanceof NavigationEnd) {
        this.isPlaningPage = event.url === '/planification';
      }
     
  
    });
  
  }
  }
