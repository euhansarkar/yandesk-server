"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const category_1 = require("./category");
const product_1 = require("./product");
const shop_1 = require("./shop");
// import { shopCategoryQueries } from "./shop-category";
exports.Query = Object.assign(Object.assign(Object.assign({}, category_1.categoryQueries), shop_1.shopQueries), product_1.productQueries);
