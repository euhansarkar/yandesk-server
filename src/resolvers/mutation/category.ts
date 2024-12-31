export const categoryMutations = {
  createCategory: async (parent: any, { category }: any, { prisma }: any) => {
    if (!category.title || !category.description) {
      return {
        userError: "Title and description are required!",
        category: null,
      };
    }

    const newCategory = await prisma.category.create({
      data: {
        title: category.title,
        description: category.description,
      },
    });

    return {
      userError: null,
      category: newCategory,
    };
  },

  updateCategory: async (
    parent: any,
    { categoryId, category }: any,
    { prisma }: any
  ) => {
    const updatedCategory = await prisma.category.update({
      where: {
        id: Number(categoryId),
      },
      data: category,
    });

    return {
      userError: null,
      category: updatedCategory,
    };
  },

  deleteCategory: async (parent: any, { categoryId }: any, { prisma }: any) => {
    const deletedCategory = await prisma.category.delete({
      where: {
        id: Number(categoryId),
      },
    });

    return {
      userError: null,
      category: deletedCategory,
    };
  },
};
