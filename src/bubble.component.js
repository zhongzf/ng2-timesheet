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
var bubble_1 = require('./models/bubble');
var BubbleComponent = (function () {
    function BubbleComponent() {
    }
    Object.defineProperty(BubbleComponent.prototype, "offset", {
        get: function () {
            return this.bubble.offset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BubbleComponent.prototype, "width", {
        get: function () {
            return this.bubble.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BubbleComponent.prototype, "label", {
        get: function () {
            return this.bubble.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BubbleComponent.prototype, "type", {
        get: function () {
            return this.bubble.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BubbleComponent.prototype, "duration", {
        get: function () {
            return this.bubble.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BubbleComponent.prototype, "date", {
        get: function () {
            return this.bubble.date;
        },
        enumerable: true,
        configurable: true
    });
    BubbleComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', bubble_1.Bubble)
    ], BubbleComponent.prototype, "bubble", void 0);
    BubbleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bubble',
            templateUrl: 'bubble.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BubbleComponent);
    return BubbleComponent;
}());
exports.BubbleComponent = BubbleComponent;
//# sourceMappingURL=bubble.component.js.map