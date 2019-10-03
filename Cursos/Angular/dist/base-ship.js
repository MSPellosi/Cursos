"use strict";
exports.__esModule = true;
var Nave = /** @class */ (function () {
    function Nave(propulsor) {
        this.propulsor = propulsor;
    }
    Nave.prototype.IperEspaco = function () {
        console.log("entrando no super espaco " + this.propulsor);
    };
    return Nave;
}());
exports.Nave = Nave;
//export{Nave, Carga}
