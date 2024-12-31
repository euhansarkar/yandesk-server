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
exports.shopCategoryMutations = void 0;
exports.shopCategoryMutations = {
    linkShopToCategory: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { shopId, categoryId }, { prisma }) {
        const existingLink = yield prisma.shopCategory.findUnique({
            where: {
                shopId_categoryId: {
                    shopId: Number(shopId),
                    categoryId: Number(categoryId),
                },
            },
        });
        if (existingLink) {
            return {
                userError: "This link already exists!",
                shopCategory: null,
            };
        }
        const newLink = yield prisma.shopCategory.create({
            data: {
                shopId: Number(shopId),
                categoryId: Number(categoryId),
            },
        });
        return {
            userError: null,
            shopCategory: newLink,
        };
    }),
    unlinkShopFromCategory: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { shopId, categoryId }, { prisma }) {
        const deletedLink = yield prisma.shopCategory.delete({
            where: {
                shopId_categoryId: {
                    shopId: Number(shopId),
                    categoryId: Number(categoryId),
                },
            },
        });
        return {
            userError: null,
            shopCategory: deletedLink,
        };
    }),
};
