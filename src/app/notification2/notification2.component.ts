import { Component } from '@angular/core';

@Component({
  selector: 'app-notification2',
  templateUrl: './notification2.component.html',
  styleUrls: ['./notification2.component.css']
})
export class Notification2Component {
  notificationText()
  {
    return 'Ont-Way Data Binding: This website uses cookies for better user experience';
  }
}
