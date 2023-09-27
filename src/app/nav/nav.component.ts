import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  menuItem1: string = 'Home';
  menuItem2: string = 'Contact Us';
  menuItem3: string = 'About Us';
  menuItem4: string = 'Site Map';
  menuItem5: string = 'Downloads';
  menuItem6: string = 'Categories';
}
