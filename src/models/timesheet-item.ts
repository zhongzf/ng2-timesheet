export class TimesheetItem {
    start: string;
    end: string;
    label: string;
    type: string;

    constructor(start: string, end: string, label: string, type: string) {
        this.start = start;
        this.end = end;
        this.label = label;
        this.type = type;
    }
}