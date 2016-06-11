# ng2-timesheet

## Angular 2 Timesheet component

A clone version of [timesheet.js](https://sbstjn.github.io/timesheet.js) (JavaScript library for HTML5 & CSS3 time sheets) built on [Angular 2](https://angular.io/)

![ng2-timesheet](http://images.cnblogs.com/cnblogs_com/zhongzf/839959/o_ng2-timesheet-2.png)

## Usage

### app.component.ts
```javascript
  timesheet = new Timesheet(2002, 2013, [
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
```

### app.component.html
```html
<timesheet [timesheet]='timesheet'></timesheet>
```
