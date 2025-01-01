import { Category, PrismaClient, Product, Shop, ShopCategory } from "@prisma/client";

const prisma = new PrismaClient();

const productImage =
  "https://cdn.pixabay.com/photo/2023/06/13/10/59/ai-generated-8060682_1280.jpg";

const shopImage =
  "https://img.freepik.com/premium-vector/logo-fast-food-restaurant-company-brand-business-marketing_686210-21.jpg?w=740";

const categoryIcon = "https://cdn-icons-png.flaticon.com/512/3703/3703377.png";

const generateLocation = (index: any) => {
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];
  const streets = [
    "Main St",
    "Broadway",
    "Elm St",
    "Market St",
    "Highland Ave",
    "Park Ave",
    "Maple St",
    "Oak St",
    "Pine St",
    "Cedar St",
  ];
  return `${index % 100} ${streets[index % streets.length]}, ${
    cities[index % cities.length]
  }`;
};

async function main() {
  const shops: Shop[] = [];
  const categories: Category[] = [];
  const products: Product[] = [];
  const shopCategories: ShopCategory[] = [];

  // Create 30 shops
  for (let i = 1; i <= 30; i++) {
    const shop = await prisma.shop.create({
      data: {
        name: `Shop ${i}`,
        logo: shopImage,
        location: generateLocation(i),
        description: `Description for Shop ${i}`,
        estDeliveryTime: `${20 + (i % 30)}-${30 + (i % 40)} mins`,
        isClosed: i % 5 === 0,
        businessHour: `${8 + (i % 12)} AM - ${8 + (i % 12) + 10} PM`,
      },
    });
    shops.push(shop);

    // Create 8 categories per shop
    for (let j = 1; j <= 8; j++) {
      const category = await prisma.category.create({
        data: {
          title: `Category ${j} for Shop ${i}`,
          icon: categoryIcon,
          description: `Description for Category ${j} in Shop ${i}`,
        },
      });
      categories.push(category);

      // Link shop and category
      // @ts-expect-error e
      shopCategories.push({ shopId: shop.id, categoryId: category.id });

      // Create 5 products per category
      for (let k = 1; k <= 5; k++) {
        const product = {
          name: `Product ${k} in Category ${j} of Shop ${i}`,
          description: `Description for Product ${k} in Category ${j} of Shop ${i}`,
          price: (10 + k * j),
          quantity: 50 + k * 5,
          isAvailable: k % 2 !== 0,
          images: [productImage],
          shopId: shop.id,
          categoryId: category.id,
        };
        // @ts-expect-error e
        products.push(product);
      }
    }
  }

  // Bulk insert products and shop-category links
  await prisma.product.createMany({ data: products });
  await prisma.shopCategory.createMany({ data: shopCategories });

  console.log("Seeding completed successfully!");
}

main().finally(async () => {
  await prisma.$disconnect();
});
