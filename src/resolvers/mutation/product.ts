export const productMutations = {
  createProduct: async (parent: any, { product }: any, { prisma }: any) => {
    const {
      name,
      description,
      price,
      quantity,
      isAvailable,
      images,
      shopId,
      categoryId,
    } = product;

    if (
      !name ||
      !description ||
      !price ||
      !quantity ||
      isAvailable === undefined ||
      !images ||
      images.length === 0
    ) {
      return {
        userError: "All fields except shopId and categoryId are required!",
        product: null,
      };
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        quantity,
        isAvailable,
        images,
        shopId: shopId || null,
        categoryId: categoryId || null,
      },
    });

    return {
      userError: null,
      product: newProduct,
    };
  },

  updateProduct: async (
    parent: any,
    { productId, product }: any,
    { prisma }: any
  ) => {
    const {
      name,
      description,
      price,
      quantity,
      isAvailable,
      images,
      shopId,
      categoryId,
    } = product;

    const updatedProduct = await prisma.product.update({
      where: {
        id: String(productId),
      },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(price !== undefined && { price }),
        ...(quantity !== undefined && { quantity }),
        ...(isAvailable !== undefined && { isAvailable }),
        ...(images && { images }),
        ...(shopId && { shopId }),
        ...(categoryId && { categoryId }),
      },
    });

    return {
      userError: null,
      product: updatedProduct,
    };
  },

  deleteProduct: async (parent: any, { productId }: any, { prisma }: any) => {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: String(productId),
      },
    });

    return {
      userError: null,
      product: deletedProduct,
    };
  },
};
