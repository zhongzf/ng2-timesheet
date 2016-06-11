export class Bubble {
    offset: number;
    width: number;
    label: string;
    type: string;
    
    duration: number;
    date: string;

    constructor(offset, width, label, type, duration?, date?) {
        this.offset = offset;
        this.width = width;
        this.label = label;
        this.type = type;

        this.duration = duration;
        this.date = date;
    }

    start;
    end;
}