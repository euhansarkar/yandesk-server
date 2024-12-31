export const productQueries = {
  products: async (parent: any, args: any, { prisma }: any) => {
    return await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        shop: true,
        category: true,
      },
    });
  },

  product: async (parent: any, { id }: any, { prisma }: any) => {
    return await prisma.product.findUnique({
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
