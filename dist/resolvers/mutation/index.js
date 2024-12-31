"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const category_1 = require("./category");
const product_1 = require("./product");
const shop_1 = require("./shop");
const shop_category_1 = require("./shop-category");
exports.Mutation = Object.assign(Object.assign(Object.assign(Object.assign({}, product_1.productMutations), shop_1.shopMutations), category_1.categoryMutations), shop_category_1.shopCategoryMutations);
