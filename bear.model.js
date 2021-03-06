"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Bear = void 0;
var animal_model_1 = require("./animal.model");
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear(data) {
        var _this = _super.call(this, data) || this;
        _this.claws = data.claws;
        _this.name = data.name;
        _this.tail = data.tail;
        return _this;
    }
    Bear.prototype.add = function (num1, num2) {
        var result = num1 + num2;
        return result;
    };
    Bear.prototype.addTwo = function (num1, num2) {
        return num1 + num2;
    };
    return Bear;
}(animal_model_1.Animal));
exports.Bear = Bear;
