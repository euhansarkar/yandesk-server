import { Product } from "@prisma/client";

export const shopQueries = {
  shops: async (parent: any, args: any, { prisma }: any) => {
    return await prisma.shop.findMany({
      include: {
        categories: {
          include: { category: true },
        },
        products: true,
      },
    });
  },

  shop: async (parent: any, { id }: any, { prisma }: any) => {
    const result = await prisma.shop.findUnique({
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
    const categoriesWithProducts = result.categories.map((shopCategory: any) => {
      const categoryProducts = result.products.filter(
        (product: Product) => product.categoryId === shopCategory.category.id
      );

      return {
        id: shopCategory.category.id,
        title: shopCategory.category.title,
        description: shopCategory.category.description,
        icon: shopCategory.category.icon,
        createdAt: shopCategory.category.createdAt,
        updatedAt: shopCategory.category.updatedAt,
        products: categoryProducts.map((product: Product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          quantity: product.quantity,
          isAvailable: product.isAvailable,
          images: product.images,
          createdAt: product?.createdAt,
          updatedAt: product?.updatedAt
        })),
      };
    });

    const r = {
      ...result,
      categories: categoriesWithProducts,
    }

    // Return the transformed response
    return r 
  },
};
