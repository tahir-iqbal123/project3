import { Component } from '@angular/core';

@Component({
  selector: 'app-notification4',
  templateUrl: './notification4.component.html',
  styleUrls: ['./notification4.component.css']
})
export class Notification4Component {
  displayNotification: boolean = false;
  closeMethod()
  {
    this.displayNotification = true;
  }
}
