import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Invoice';
  items :NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: 'dashboard',
    },
    {
      title: 'Product',
      icon: 'backspace-outline',
      link: 'product',
    },
    {
      title: 'Customer',
      icon: { icon: 'people-outline', pack: 'eva' },
      link: 'customer',
    },
    {
      title: 'Invoice',
      icon: { icon: 'file-text-outline', pack: 'eva' },
      link: 'invoice',
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: '',
    },
  ];
}
