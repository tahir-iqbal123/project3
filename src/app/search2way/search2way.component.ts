import { Component } from '@angular/core';

@Component({
  selector: 'app-search2way',
  templateUrl: './search2way.component.html',
  styleUrls: ['./search2way.component.css']
})
export class Search2wayComponent {
  searchValue: string = 'Laptop';
  searchMethod(eventData: Event)
  {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}
