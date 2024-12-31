import { categoryQueries } from "./category";
import { productQueries } from "./product";
import { shopQueries } from "./shop";
// import { shopCategoryQueries } from "./shop-category";

export const Query = {
    ...categoryQueries,
    ...shopQueries,
    ...productQueries,
    // ...shopCategoryQueries
}