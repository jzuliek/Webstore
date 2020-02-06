import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss',],
})
export class BookingComponent implements OnInit {


  show = false;
  autohide = true;

  model: NgbDateStruct;
  today = this.calendar.getToday();
  placement = 'top-right';

 

  constructor(private calendar: NgbCalendar) { }

  
  ngOnInit() {
  }
 

}
