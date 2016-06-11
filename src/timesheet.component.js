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
var timesheet_1 = require('./models/timesheet');
var bubble_1 = require('./models/bubble');
var bubble_component_1 = require('./bubble.component');
var moment = require('moment');
var TimesheetComponent = (function () {
    function TimesheetComponent(_element) {
        this._element = _element;
        this.years = [];
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        this.minDate = moment(this.timesheet.min.toString());
        this.maxDate = moment(this.timesheet.max.toString());
        for (var year = this.timesheet.min; year < this.timesheet.max; year++) {
            this.years.push(year);
        }
    };
    Object.defineProperty(TimesheetComponent.prototype, "bubbles", {
        get: function () {
            var _this = this;
            var bubbles = [];
            var section = this._element.nativeElement.querySelector('.scale section');
            if (section) {
                var sectionWidth = section.offsetWidth;
                this.timesheet.data.forEach(function (item) {
                    var startDate = moment(item.start);
                    var endDate = moment(item.end);
                    var offset = _this.calculateOffset(sectionWidth, _this.minDate, startDate);
                    var duration = _this.calculateDuration(startDate, endDate);
                    var width = _this.calculateWidth(sectionWidth, duration);
                    var dateLabel = item.start + "~" + item.end;
                    var bubble = new bubble_1.Bubble(offset, width, item.label, item.type, duration, dateLabel);
                    bubble.start = item.start;
                    bubble.end = item.end;
                    bubbles.push(bubble);
                });
            }
            return bubbles;
        },
        enumerable: true,
        configurable: true
    });
    TimesheetComponent.prototype.calculateOffset = function (sectionWidth, minDate, startDate) {
        return (sectionWidth / 12) * (12 * (startDate.year() - minDate.year()) + startDate.month());
    };
    TimesheetComponent.prototype.calculateWidth = function (sectionWidth, duration) {
        return (sectionWidth / 12) * duration;
    };
    TimesheetComponent.prototype.calculateDuration = function (startDate, endDate) {
        var startDateValue = startDate.valueOf();
        var endDateValue = endDate.valueOf();
        var durationValue = endDateValue - startDateValue;
        var durationAsMonths = moment.duration(durationValue).asMonths();
        return durationAsMonths;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', timesheet_1.Timesheet)
    ], TimesheetComponent.prototype, "timesheet", void 0);
    TimesheetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'timesheet',
            templateUrl: 'timesheet.component.html',
            directives: [bubble_component_1.BubbleComponent]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TimesheetComponent);
    return TimesheetComponent;
}());
exports.TimesheetComponent = TimesheetComponent;
//# sourceMappingURL=timesheet.component.js.map