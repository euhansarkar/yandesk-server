"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopMutations = void 0;
exports.shopMutations = {
    createShop: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { shop }, { prisma }) {
        if (!shop.name || !shop.location || !shop.description) {
            return {
                userError: "Name, location, and description are required!",
                shop: null,
            };
        }
        const newShop = yield prisma.shop.create({
            data: shop,
        });
        return {
            userError: null,
            shop: newShop,
        };
    }),
    updateShop: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { shopId, shop }, { prisma }) {
        const updatedShop = yield prisma.shop.update({
            where: {
                id: Number(shopId),
            },
            data: shop,
        });
        return {
            userError: null,
            shop: updatedShop,
        };
    }),
    deleteShop: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { shopId }, { prisma }) {
        const deletedShop = yield prisma.shop.delete({
            where: {
                id: Number(shopId),
            },
        });
        return {
            userError: null,
            shop: deletedShop,
        };
    }),
};
