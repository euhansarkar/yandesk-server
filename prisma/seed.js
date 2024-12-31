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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Seed Shops
        const shop1 = yield prisma.shop.create({
            data: {
                name: "TechHub Electronics",
                logo: "https://example.com/logos/techhub.png",
                location: "123 Main St, Tech City",
                description: "Your one-stop shop for all electronic gadgets.",
                estDeliveryTime: "30-45 mins",
                isClosed: false,
                businessHour: "9 AM - 9 PM",
            },
        });
        const shop2 = yield prisma.shop.create({
            data: {
                name: "Fashionista Clothing",
                logo: "https://example.com/logos/fashionista.png",
                location: "456 Style Ave, Trendy Town",
                description: "Trendy clothing for every occasion.",
                estDeliveryTime: "45-60 mins",
                isClosed: false,
                businessHour: "10 AM - 8 PM",
            },
        });
        const shop3 = yield prisma.shop.create({
            data: {
                name: "Gadget Galaxy",
                logo: "https://example.com/logos/gadgetgalaxy.png",
                location: "789 Tech Park, Innovator's Lane",
                description: "Latest and greatest gadgets in one place.",
                estDeliveryTime: "25-35 mins",
                isClosed: true,
                businessHour: "8 AM - 10 PM",
            },
        });
        // Seed Categories
        const category1 = yield prisma.category.create({
            data: {
                title: "Smartphones",
                icon: "https://example.com/icons/smartphones.png",
                description: "Latest and greatest smartphones in the market.",
            },
        });
        const category2 = yield prisma.category.create({
            data: {
                title: "Laptops",
                icon: "https://example.com/icons/laptops.png",
                description: "Top-notch laptops for work and play.",
            },
        });
        const category3 = yield prisma.category.create({
            data: {
                title: "Men's Clothing",
                icon: "https://example.com/icons/mens-clothing.png",
                description: "Stylish and comfortable men's apparel.",
            },
        });
        const category4 = yield prisma.category.create({
            data: {
                title: "Women's Clothing",
                icon: "https://example.com/icons/womens-clothing.png",
                description: "Fashion-forward women's wear.",
            },
        });
        const category5 = yield prisma.category.create({
            data: {
                title: "Accessories",
                icon: "https://example.com/icons/accessories.png",
                description: "Trendy accessories to complement your style.",
            },
        });
        // Seed Products
        yield prisma.product.createMany({
            data: [
                {
                    name: "iPhone 14 Pro Max",
                    description: "The latest iPhone with an incredible camera system.",
                    price: 1099.99,
                    quantity: 50,
                    isAvailable: true,
                    images: ["https://example.com/images/iphone14.jpg"],
                    shopId: shop1.id,
                    categoryId: category1.id,
                },
                {
                    name: "Samsung Galaxy S23 Ultra",
                    description: "High-end smartphone with a stunning display.",
                    price: 1199.99,
                    quantity: 30,
                    isAvailable: true,
                    images: ["https://example.com/images/galaxy-s23.jpg"],
                    shopId: shop1.id,
                    categoryId: category1.id,
                },
                {
                    name: "MacBook Air M2",
                    description: "Sleek and powerful laptop with M2 chip.",
                    price: 999.99,
                    quantity: 20,
                    isAvailable: true,
                    images: ["https://example.com/images/macbook-air.jpg"],
                    shopId: shop1.id,
                    categoryId: category2.id,
                },
                {
                    name: "Dell XPS 13",
                    description: "Compact and powerful laptop for professionals.",
                    price: 1299.99,
                    quantity: 15,
                    isAvailable: true,
                    images: ["https://example.com/images/dell-xps.jpg"],
                    shopId: shop1.id,
                    categoryId: category2.id,
                },
                {
                    name: "Men's Leather Jacket",
                    description: "Premium quality leather jacket.",
                    price: 199.99,
                    quantity: 40,
                    isAvailable: true,
                    images: ["https://example.com/images/leather-jacket.jpg"],
                    shopId: shop2.id,
                    categoryId: category3.id,
                },
                {
                    name: "Women's Summer Dress",
                    description: "Light and breezy dress for summer days.",
                    price: 49.99,
                    quantity: 60,
                    isAvailable: true,
                    images: ["https://example.com/images/summer-dress.jpg"],
                    shopId: shop2.id,
                    categoryId: category4.id,
                },
                {
                    name: "Stylish Sunglasses",
                    description: "Protect your eyes with style.",
                    price: 29.99,
                    quantity: 100,
                    isAvailable: true,
                    images: ["https://example.com/images/sunglasses.jpg"],
                    shopId: shop3.id,
                    categoryId: category5.id,
                },
            ],
        });
        // Link Shops and Categories (Many-to-Many)
        yield prisma.shopCategory.createMany({
            data: [
                { shopId: shop1.id, categoryId: category1.id },
                { shopId: shop1.id, categoryId: category2.id },
                { shopId: shop2.id, categoryId: category3.id },
                { shopId: shop2.id, categoryId: category4.id },
                { shopId: shop3.id, categoryId: category1.id },
                { shopId: shop3.id, categoryId: category5.id },
            ],
        });
        console.log("Seeding completed!");
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
