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
        this.setClickedRow = function (index, red) {
            this.selectedRow = index;
            this.isin = red.ISIN;
            this.security = red.security;
        };
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
        template: "\n<div class=\"form-group\">\n         <label><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span></label>\n         <input placeholder=\"Search Security\"  type=\"text\" (keyup)=\"FilterBySecurity()\"  id=\"inputName\" [(ngModel)]=\"inputName\"/>\n\n   </div>\n    <div class=\"panel panel-default\">\n    <!-- Default panel contents -->\n    <div class='panel-heading'>Portfolio List</div>\n    <div class='panel-body'>\n        <table class=\"table table-bordered table-condensed \">\n            <thead>\n               <th>Security</th>\n               <th>ISIN</th>\n               <th>Position</th>\n               <th>Close price</th>\n               <th>Live price</th>\n               <th>Value</th>\n               <th>PnL</th>\n            </thead>\n            <tbody>\n               <tr *ngFor=\"let item of items; let i=index\" (click)=\"setClickedRow(i,item)\" [class.active]=\"i == selectedRow\" data-toggle=\"modal\" data-target=\"#myModal\">\n                  <td>{{item.security}}</td>\n                  <td>{{item.ISIN}}</td>\n                  <td>{{item.position}}</td>\n                  <td>{{item.closePrice}}</td>\n                  <td>{{item.livePrice}}</td>\n                  <td>{{computeValue(item.position,item.livePrice)}}</td>\n                  <td>{{computePnl(item.position,item.livePrice,item.closePrice)}}</td>\n               </tr>\n            </tbody>\n         </table>\n         </div>\n         </div>\n            <!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">{{security}}</h4>\n      </div>\n      <div class=\"modal-body\" >\n<div class=\"classModalRow\">\n      <div class=\"classModalLabel\">\n      <label>Instrument ID</label>\n      </div>\n      <div class=\"classModalInput\">\n        <input type=\"text\" class=\"form-control\" id=\"security\" required [ngModel]=\"security\" name=\"security\">\n        </div>\n</div>\n<div class=\"classModalRow\">\n        <div class=\"classModalLabel\">\n        <label>ISIN</label>\n        </div>\n        <div class=\"classModalInput\">\n        <div style=\"width:80%;float:left\">\n        <input type=\"text\" class=\"form-control\" id=\"isin\" required [ngModel]=\"isin\" name=\"isin\"></div>\n        <div style=\"width:15%;float:left;padding-left:10px\">\n        <button type=\"button\" id=\"myButton\" data-loading-text=\"Loading...\" class=\"btn btn-info\" autocomplete=\"off\">L</button>\n        </div>\n        </div>\n</div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [])
], PortfolioComponent);
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=portfolio.component.js.map