export const shopCategoryQueries = {
  shopCategories: async (parent: any, args: any, { prisma }: any) => {
    return await prisma.shopCategory.findMany({
      include: {
        shop: true,
        category: true,
      },
    });
  },

  shopCategory: async (parent: any, { id }: any, { prisma }: any) => {
    return await prisma.shopCategory.findUnique({
      where: {
        id
      },
      include: {
        shop: true,
        category: true,
      },
    });
  },
};
