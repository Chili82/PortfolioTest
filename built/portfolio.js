"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Portfolio = (function () {
    function Portfolio(security, ISIN, position, closePrice, livePrice, value, pnl) {
        this.security = security;
        this.ISIN = ISIN;
        this.position = position;
        this.closePrice = closePrice;
        this.livePrice = livePrice;
        this.value = value;
        this.pnl = pnl;
    }
    return Portfolio;
}());
exports.Portfolio = Portfolio;
//# sourceMappingURL=portfolio.js.map