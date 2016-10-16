"use strict";
var Emp = (function () {
    function Emp() {
    }
    Emp.prototype.getInfo = function () {
        return "Name: " + this.name + " Id: " + this.id;
    };
    return Emp;
}());
exports.Emp = Emp;
//# sourceMappingURL=test.js.map