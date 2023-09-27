import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchData: string = '';
  searchMethod(eventData: Event)
  {
    // console.log(eventData);
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchData = (<HTMLInputElement>eventData.target).value;
  }
}
