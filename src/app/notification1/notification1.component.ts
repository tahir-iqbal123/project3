import { Component } from '@angular/core';

@Component({
  selector: 'app-notification1',
  templateUrl: './notification1.component.html',
  styleUrls: ['./notification1.component.css']
})
export class Notification1Component {
  notification_text: string = 'One-Way Data Binding: This website uses cookies for better user experience.';
}
