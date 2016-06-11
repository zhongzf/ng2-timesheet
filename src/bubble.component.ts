import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Bubble } from './models/bubble';

@Component({
    moduleId: module.id,
    selector: 'bubble',
    templateUrl: 'bubble.component.html'
})

export class BubbleComponent implements OnInit {
    @Input()
    bubble: Bubble;

    get offset() {
        return this.bubble.offset;
    }
    get width() {
        return this.bubble.width;
    }
    get label() {
        return this.bubble.label;
    }
    get type() {
        return this.bubble.type;
    }

    get duration() {
        return this.bubble.duration;
    }
    get date() {
        return this.bubble.date;
    }

    constructor() { }

    ngOnInit() { }
}