import { Component } from '@angular/core';

@Component({
  // selector: 'app-content',
  // selector: '.app-content',
  // selector: '#app-content',
  selector: '[app-content]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  imgSrc: string = '/assets/pic2.jpg';
}
