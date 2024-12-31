"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
    type Query {
        shops: [Shop!]!
        shop(id: ID!): Shop
        categories: [Category!]!
        category(id: ID!): Category
        products: [Product!]!
        product(id: ID!): Product
    }

    type Mutation {
        createShop(name: String!, location: String!, description: String!, estDeliveryTime: String!, businessHour: String!): Shop!
        updateShop(id: ID!, name: String, location: String, description: String, estDeliveryTime: String, businessHour: String): Shop!
        deleteShop(id: ID!): Shop!

        createCategory(title: String!, description: String!): Category!
        updateCategory(id: ID!, title: String, description: String): Category!
        deleteCategory(id: ID!): Category!

        createProduct(name: String!, description: String!, images: [String!]!, profile: String!, shopId: ID, categoryId: ID): Product!
        updateProduct(id: ID!, name: String, description: String, images: [String!], profile: String, shopId: ID, categoryId: ID): Product!
        deleteProduct(id: ID!): Product!

        linkShopToCategory(shopId: ID!, categoryId: ID!): ShopCategory!
        unlinkShopFromCategory(shopId: ID!, categoryId: ID!): ShopCategory!
    }

    type Shop {
        id: ID!
        name: String!
        location: String!
        logo: String!
        isClosed: Boolean!
        description: String!
        estDeliveryTime: String!
        businessHour: String!
        products: [Product!]!
        categories: [Category!]! # Many-to-many relation
    }

    type Category {
        id: ID!
        title: String!
        description: String!
        createdAt: String!
        updatedAt: String!
        products: [Product!]!
        shops: [Shop!]! # Many-to-many relation
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        price: Float!
        quantity: Int!
        isAvailable: Boolean!
        images: [String!]!
        createdAt: String!
        updatedAt: String!
        shop: Shop
        category: Category
    }


    type ShopCategory {
        id: ID!
        shop: Shop!
        category: Category!
    }
`;
