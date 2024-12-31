export const categoryQueries = {
  categories: async (parent: any, args: any, { prisma }: any) => {
    return await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        shops: {
          include: { shop: true },
        },
        products: true,
      },
    });
  },

  category: async (parent: any, { id }: any, { prisma }: any) => {
    const result =  await prisma.category.findUnique({
      where: {
        id 
      },
      include: {
        shops: {
          include: { shop: true },
        },
        products: true,
      },
    });

    console.log(`see result`, result);

    return result;
  },
};
