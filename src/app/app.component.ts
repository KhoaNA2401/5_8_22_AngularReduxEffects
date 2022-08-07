import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sidebarService: NbSidebarService) {
  }
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home'
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];
}
