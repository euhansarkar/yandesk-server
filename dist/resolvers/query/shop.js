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
exports.shopQueries = void 0;
exports.shopQueries = {
    shops: (parent_1, args_1, _a) => __awaiter(void 0, [parent_1, args_1, _a], void 0, function* (parent, args, { prisma }) {
        return yield prisma.shop.findMany({
            include: {
                categories: {
                    include: { category: true },
                },
                products: true,
            },
        });
    }),
    shop: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { id }, { prisma }) {
        const result = yield prisma.shop.findUnique({
            where: {
                id,
            },
            include: {
                categories: {
                    include: { category: true },
                },
                products: true,
            },
        });
        // console.log(`see result`, result);
        // return result;
        // Transform the data to group products by category
        const categoriesWithProducts = result.categories.map((shopCategory) => {
            const categoryProducts = result.products.filter((product) => product.categoryId === shopCategory.category.id);
            return {
                id: shopCategory.category.id,
                title: shopCategory.category.title,
                description: shopCategory.category.description,
                icon: shopCategory.category.icon,
                createdAt: shopCategory.category.createdAt,
                updatedAt: shopCategory.category.updatedAt,
                products: categoryProducts.map((product) => ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    quantity: product.quantity,
                    isAvailable: product.isAvailable,
                    images: product.images,
                    createdAt: product === null || product === void 0 ? void 0 : product.createdAt,
                    updatedAt: product === null || product === void 0 ? void 0 : product.updatedAt
                })),
            };
        });
        const r = Object.assign(Object.assign({}, result), { categories: categoriesWithProducts });
        // Return the transformed response
        return r;
    }),
};
