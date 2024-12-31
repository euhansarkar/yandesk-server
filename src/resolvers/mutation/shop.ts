export const shopMutations = {
  createShop: async (parent: any, { shop }: any, { prisma }: any) => {
    if (!shop.name || !shop.location || !shop.description) {
      return {
        userError: "Name, location, and description are required!",
        shop: null,
      };
    }

    const newShop = await prisma.shop.create({
      data: shop,
    });

    return {
      userError: null,
      shop: newShop,
    };
  },

  updateShop: async (parent: any, { shopId, shop }: any, { prisma }: any) => {
    const updatedShop = await prisma.shop.update({
      where: {
        id: Number(shopId),
      },
      data: shop,
    });

    return {
      userError: null,
      shop: updatedShop,
    };
  },

  deleteShop: async (parent: any, { shopId }: any, { prisma }: any) => {
    const deletedShop = await prisma.shop.delete({
      where: {
        id: Number(shopId),
      },
    });

    return {
      userError: null,
      shop: deletedShop,
    };
  },
};
