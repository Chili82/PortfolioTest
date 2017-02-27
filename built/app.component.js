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
        template: "<div>\n                <header><h1>Portfolio monitor</h1>\n                      <div id=\"menu\">\n                        <div style=\"width:15%;border-right:1px solid #3498db;float:left\">\n                        <label for=\"showblock\"><span class=\"glyphicon glyphicon-menu-hamburger\">Menu</span></label>\n                        </div>\n\n                        <div style=\"float:left;width:25%;padding-left:5px\">\n                        <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> User\n                        </div>\n                        <div style=\"float:left;width:60%;text-align:right;cursor:pointer\" data-toggle=\"modal\" data-target=\"#myModal\">\n                        <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\n                        </div>\n                      </div>\n                </header>\n\n\n\n                    <input type=\"checkbox\" id=\"showblock\" />\n\n                    <nav>\n\n                        <a  routerLink=\"/portfolio\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span>Portfolio</a>\n                        <a  routerLink=\"/grafikon\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span>Grafikon</a>\n                    </nav>\n                <main id=\"content\">\n                <router-outlet></router-outlet>\n                </main>\n            </div>\n\n            <!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n      </div>\n      <div class=\"modal-body\">\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map