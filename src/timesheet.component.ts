import { Component, OnInit, OnChanges, AfterViewInit, Input, Output, ElementRef } from '@angular/core';
import { Timesheet } from './models/timesheet';
import { TimesheetItem } from './models/timesheet-item';
import { Bubble } from './models/bubble';
import { BubbleComponent } from './bubble.component';
import * as moment from 'moment';


@Component({
    moduleId: module.id,
    selector: 'timesheet',
    templateUrl: 'timesheet.component.html',
    directives:[BubbleComponent]
})
export class TimesheetComponent implements OnInit {
    @Input()
    timesheet: Timesheet;

    minDate: moment.Moment;
    maxDate: moment.Moment;
    years: number[] = [];

    constructor(private _element: ElementRef) { }

    ngOnInit() {
        this.minDate = moment(this.timesheet.min.toString());
        this.maxDate = moment(this.timesheet.max.toString());
        for (var year = this.timesheet.min; year < this.timesheet.max; year++) {
            this.years.push(year);
        }
    }

    get bubbles() : Bubble[] {
        var bubbles = [];
        var section = this._element.nativeElement.querySelector('.scale section');
        if (section) {
            var sectionWidth = section.offsetWidth;
            this.timesheet.data.forEach(item => {
                var startDate = moment(item.start);
                var endDate = moment(item.end);
                var offset = this.calculateOffset(sectionWidth, this.minDate, startDate);
                var duration = this.calculateDuration(startDate, endDate);
                var width = this.calculateWidth(sectionWidth, duration);
                var dateLabel = `${item.start}~${item.end}`;
                var bubble = new Bubble(offset, width, item.label, item.type, duration, dateLabel);
                bubble.start = item.start;
                bubble.end = item.end;
                bubbles.push(bubble);
            });
        }
        return bubbles;
    }

    calculateOffset(sectionWidth, minDate: moment.Moment, startDate: moment.Moment): number {
        return (sectionWidth / 12) * (12 * (startDate.year() - minDate.year()) + startDate.month());
    }

    calculateWidth(sectionWidth, duration): number {
        return (sectionWidth / 12) * duration;
    }

    calculateDuration(startDate: moment.Moment, endDate: moment.Moment): number {
        var startDateValue = startDate.valueOf();
        var endDateValue = endDate.valueOf();
        var durationValue = endDateValue - startDateValue;
        var durationAsMonths = moment.duration(durationValue).asMonths();
        return durationAsMonths;
    }
}