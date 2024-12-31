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
exports.categoryMutations = void 0;
exports.categoryMutations = {
    createCategory: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { category }, { prisma }) {
        if (!category.title || !category.description) {
            return {
                userError: "Title and description are required!",
                category: null,
            };
        }
        const newCategory = yield prisma.category.create({
            data: {
                title: category.title,
                description: category.description,
            },
        });
        return {
            userError: null,
            category: newCategory,
        };
    }),
    updateCategory: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { categoryId, category }, { prisma }) {
        const updatedCategory = yield prisma.category.update({
            where: {
                id: Number(categoryId),
            },
            data: category,
        });
        return {
            userError: null,
            category: updatedCategory,
        };
    }),
    deleteCategory: (parent_1, _a, _b) => __awaiter(void 0, [parent_1, _a, _b], void 0, function* (parent, { categoryId }, { prisma }) {
        const deletedCategory = yield prisma.category.delete({
            where: {
                id: Number(categoryId),
            },
        });
        return {
            userError: null,
            category: deletedCategory,
        };
    }),
};
