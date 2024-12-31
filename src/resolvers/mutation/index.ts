import { categoryMutations } from "./category";
import { productMutations } from "./product";
import { shopMutations } from "./shop";
import { shopCategoryMutations } from "./shop-category";


export const Mutation = {
    ...productMutations,
    ...shopMutations,
    ...categoryMutations,
    ...shopCategoryMutations
};