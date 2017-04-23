"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MainComponent = (function () {
    function MainComponent() {
        this.companyName = 'TRANSPARENCY-ONE';
        this.filter = '';
        this.products = [
            {
                "name": "product 1",
            },
            {
                "name": "product 2"
            }
        ];
        this.routes = [
            {
                "label": 'Se connecter',
                "link": ''
            },
            {
                "label": 'S\'inscrire',
                "link": ''
            }
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
        console.log('Application is started!');
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: 'pt-main',
        moduleId: module.id,
        templateUrl: '_templates/main.component.html',
        styleUrls: ['_styles/main.component.css']
    })
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map