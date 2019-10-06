import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-admin-searchbar',
  templateUrl: './admin-searchbar.component.html',
  styleUrls: ['./admin-searchbar.component.scss']
})
export class AdminSearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() sendSearchInfo = new EventEmitter<any>();
  collectInfo(name,city,profession){
    console.log(name);
    console.log(city);
    console.log(profession);
    this.sendSearchInfo.emit({name,city,profession});
  }

}
