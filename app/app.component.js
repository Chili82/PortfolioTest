"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div>\n                <header><h1>Helloo {{name}}</h1>\n                      <div id=\"menu\" style=\"clear:both:width:100%;text-align:left\"> <label for=\"showblock\">Menu</label></div>  \n                </header>\n                      \n                        \n                  \n                    <input type=\"checkbox\" id=\"showblock\" /> \n    \n                    <nav>\n                        \n                        <a routerLink=\"/portfolio\" routerLinkActive=\"active\">Portfolio</a>\n                        <a routerLink=\"/grafikon\" routerLinkActive=\"active\">Grafikon</a>\n                    </nav>\n                <main id=\"content\">\n                <router-outlet></router-outlet>\n                </main>\n            </div>\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map