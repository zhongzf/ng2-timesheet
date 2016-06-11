"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var timesheet_component_1 = require('../src/timesheet.component');
var timesheet_1 = require('../src/models/timesheet');
var timesheet_item_1 = require('../src/models/timesheet-item');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular 2 Timesheet Demo';
        this.timesheet = new timesheet_1.Timesheet(2002, 2014, [
            new timesheet_item_1.TimesheetItem('2002', '2002-09', 'A freaking awesome time', 'lorem'),
            new timesheet_item_1.TimesheetItem('2002-06', '2003-09', 'Some great memories', 'ipsum'),
            new timesheet_item_1.TimesheetItem('2003', '2004', 'Had very bad luck', 'default'),
            new timesheet_item_1.TimesheetItem('2003-10', '2006', 'At least had fun', 'dolor'),
            new timesheet_item_1.TimesheetItem('2005-02', '2006-05', 'Enjoyed those times as well', 'ipsum'),
            new timesheet_item_1.TimesheetItem('2005-07', '2005-09', 'Bad luck again', 'default'),
            new timesheet_item_1.TimesheetItem('2005-10', '2008', 'For a long time nothing happened', 'dolor'),
            new timesheet_item_1.TimesheetItem('2008-01', '2009-05', 'LOST Season #4', 'lorem'),
            new timesheet_item_1.TimesheetItem('2009-01', '2009-05', 'LOST Season #4', 'sit'),
            new timesheet_item_1.TimesheetItem('2010-02', '2010-05', 'LOST Season #5', 'lorem'),
            new timesheet_item_1.TimesheetItem('2008-09', '2010-06', 'FRINGE #1 & #2', 'ipsum')
        ]);
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [timesheet_component_1.TimesheetComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map