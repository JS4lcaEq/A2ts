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
var InputComponet = (function () {
    function InputComponet() {
        this.test = "InputComponet";
        this.arr = [1, 2, 3, 4, 5];
    }
    InputComponet = __decorate([
        core_1.Component({
            selector: 'vtb-input',
            template: '<p>vtb-input</p>'
        }), 
        __metadata('design:paramtypes', [])
    ], InputComponet);
    return InputComponet;
}());
exports.InputComponet = InputComponet;
//# sourceMappingURL=input.component.js.map