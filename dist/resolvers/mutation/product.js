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
exports.productMutations = void 0;
exports.productMutations = {
    createProduct: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { product }, { prisma }) {
        const { name, description, price, quantity, isAvailable, images, shopId, categoryId, } = product;
        if (!name ||
            !description ||
            !price ||
            !quantity ||
            isAvailable === undefined ||
            !images ||
            images.length === 0) {
            return {
                userError: "All fields except shopId and categoryId are required!",
                product: null,
            };
        }
        const newProduct = yield prisma.product.create({
            data: {
                name,
                description,
                price,
                quantity,
                isAvailable,
                images,
                shopId: shopId || null,
                categoryId: categoryId || null,
            },
        });
        return {
            userError: null,
            product: newProduct,
        };
    }),
    updateProduct: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { productId, product }, { prisma }) {
        const { name, description, price, quantity, isAvailable, images, shopId, categoryId, } = product;
        const updatedProduct = yield prisma.product.update({
            where: {
                id: String(productId),
            },
            data: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (name && { name })), (description && { description })), (price !== undefined && { price })), (quantity !== undefined && { quantity })), (isAvailable !== undefined && { isAvailable })), (images && { images })), (shopId && { shopId })), (categoryId && { categoryId })),
        });
        return {
            userError: null,
            product: updatedProduct,
        };
    }),
    deleteProduct: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { productId }, { prisma }) {
        const deletedProduct = yield prisma.product.delete({
            where: {
                id: String(productId),
            },
        });
        return {
            userError: null,
            product: deletedProduct,
        };
    }),
};
