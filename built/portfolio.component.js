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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var portfolio_service_1 = require("./portfolio.service");
var PortfolioComponent = (function () {
    function PortfolioComponent() {
        this.inputName = '';
        this.items = portfolio_service_1.productList;
    }
    ;
    PortfolioComponent.prototype.computeValue = function (x, y) {
        var z = x * y;
        return z.toFixed(3);
    };
    PortfolioComponent.prototype.computePnl = function (x, y, z) {
        var t = x * (y - z);
        return t.toFixed(3);
    };
    PortfolioComponent.prototype.FilterBySecurity = function () {
        var _this = this;
        this.items = [];
        if (this.inputName != "") {
            portfolio_service_1.productList.forEach(function (element) {
                if (element.security.toUpperCase().indexOf(_this.inputName.toUpperCase()) >= 0) {
                    _this.items.push(element);
                }
            });
        }
        else {
            this.items = portfolio_service_1.productList;
        }
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    core_1.Component({
        selector: 'my-portfolio',
        template: "\n<div class=\"form-group\">\n         <label><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></label>\n         <input placeholder=\"Search Security\"  type=\"text\" (keyup)=\"FilterBySecurity()\"  id=\"inputName\" [(ngModel)]=\"inputName\"/>\n\n   </div>\n    <div class=\"panel panel-default\">\n    <!-- Default panel contents -->\n    <div class='panel-heading'>Portfolio List</div>\n    <div class='panel-body'>\n        <table class=\"table table-bordered table-condensed \">\n            <thead>\n               <th>Security</th>\n               <th>ISIN</th>\n               <th>Position</th>\n               <th>Close price</th>\n               <th>Live price</th>\n               <th>Value</th>\n               <th>PnL</th>\n            </thead>\n            <tbody>\n               <tr *ngFor=\"let item of items\">\n                  <td>{{item.security}}</td>\n                  <td>{{item.ISIN}}</td>\n                  <td>{{item.position}}</td>\n                  <td>{{item.closePrice}}</td>\n                  <td>{{item.livePrice}}</td>\n                  <td>{{computeValue(item.position,item.livePrice)}}</td>\n                  <td>{{computePnl(item.position,item.livePrice,item.closePrice)}}</td>\n               </tr>\n            </tbody>\n         </table>\n         </div>\n         </div>\n  \n"
    }),
    __metadata("design:paramtypes", [])
], PortfolioComponent);
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=portfolio.component.js.map