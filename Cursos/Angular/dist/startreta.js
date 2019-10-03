"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_ship_1 = require("./base-ship");
//heranca e usando interface
var MF = /** @class */ (function (_super) {
    __extends(MF, _super);
    function MF() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.container = 2;
        return _this;
    }
    MF.prototype.IperEspaco = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.IperEspaco.call(this);
        }
        else {
            console.log('Falhou');
        }
    };
    return MF;
}(base_ship_1.Nave));
exports.MF = MF;
