"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductsFilterPipe = (function () {
    function ProductsFilterPipe() {
    }
    ProductsFilterPipe.prototype.transform = function (list, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? list.filter(function (product) { return product.name.toLocaleLowerCase().indexOf(filterBy) !== -1; }) : list;
    };
    ;
    return ProductsFilterPipe;
}());
ProductsFilterPipe = __decorate([
    core_1.Pipe({
        name: 'productsFilter'
    })
], ProductsFilterPipe);
exports.ProductsFilterPipe = ProductsFilterPipe;
//# sourceMappingURL=products.filter.pipe.js.map