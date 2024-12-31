export const shopCategoryMutations = {
  linkShopToCategory: async (
    parent: any,
    { shopId, categoryId }: any,
    { prisma }: any
  ) => {
    const existingLink = await prisma.shopCategory.findUnique({
      where: {
        shopId_categoryId: {
          shopId: Number(shopId),
          categoryId: Number(categoryId),
        },
      },
    });

    if (existingLink) {
      return {
        userError: "This link already exists!",
        shopCategory: null,
      };
    }

    const newLink = await prisma.shopCategory.create({
      data: {
        shopId: Number(shopId),
        categoryId: Number(categoryId),
      },
    });

    return {
      userError: null,
      shopCategory: newLink,
    };
  },

  unlinkShopFromCategory: async (
    parent: any,
    { shopId, categoryId }: any,
    { prisma }: any
  ) => {
    const deletedLink = await prisma.shopCategory.delete({
      where: {
        shopId_categoryId: {
          shopId: Number(shopId),
          categoryId: Number(categoryId),
        },
      },
    });

    return {
      userError: null,
      shopCategory: deletedLink,
    };
  },
};
