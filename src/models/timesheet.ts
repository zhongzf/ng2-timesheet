import { TimesheetItem } from './timesheet-item';

export class Timesheet {
    min: number;
    max: number;
    data: TimesheetItem[];

    constructor(min: number, max: number, data: TimesheetItem[]) {
        this.min = min;
        this.max = max;
        this.data = data;
    }
}