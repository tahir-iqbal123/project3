import { Component } from '@angular/core';

@Component({
  selector: 'app-notification3',
  templateUrl: './notification3.component.html',
  styleUrls: ['./notification3.component.css']
})
export class Notification3Component {
  notificationText: string = 'This website uses cookies for better user experience';
  // displayNotification: boolean = true;
  displayNotification: boolean = false;
}
