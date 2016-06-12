import { Component, OnInit } from '@angular/core';
import { TimesheetItem, Timesheet, TimesheetComponent } from '../';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [TimesheetComponent]
})
export class AppComponent implements OnInit {
  title = 'Angular 2 Timesheet Demo';
  
  timesheet = new Timesheet(2002, 2014, [
      new TimesheetItem('2002', '2002-09', 'A freaking awesome time', 'lorem'),
      new TimesheetItem('2002-06', '2003-09', 'Some great memories', 'ipsum'),
      new TimesheetItem('2003', '2004', 'Had very bad luck', 'default'),
      new TimesheetItem('2003-10', '2006', 'At least had fun', 'dolor'),
      new TimesheetItem('2005-02', '2006-05', 'Enjoyed those times as well', 'ipsum'),
      new TimesheetItem('2005-07', '2005-09', 'Bad luck again', 'default'),
      new TimesheetItem('2005-10', '2008', 'For a long time nothing happened', 'dolor'),
      new TimesheetItem('2008-01', '2009-05', 'LOST Season #4', 'lorem'),
      new TimesheetItem('2009-01', '2009-05', 'LOST Season #4', 'sit'),
      new TimesheetItem('2010-02', '2010-05', 'LOST Season #5', 'lorem'),
      new TimesheetItem('2008-09', '2010-06', 'FRINGE #1 & #2', 'ipsum')
  ]);

  constructor() { }

  ngOnInit() { }

}