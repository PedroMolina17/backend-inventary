import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: 'admin@hotel.com',
      password: 'adminpassword123',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user@hotel.com',
      password: 'userpassword123',
    },
  });

  const snacksCategory = await prisma.category.create({
    data: {
      name: 'Snacks',
    },
  });

  const drinksCategory = await prisma.category.create({
    data: {
      name: 'Bebidas',
    },
  });

  const amenitiesCategory = await prisma.category.create({
    data: {
      name: 'Amenities',
    },
  });

  const product1 = await prisma.product.create({
    data: {
      name: 'Papas fritas',
      price: 2.5,
      stock: 100,
      categoryId: snacksCategory.id,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Coca-Cola',
      price: 1.5,
      stock: 200,
      categoryId: drinksCategory.id,
    },
  });

  const product3 = await prisma.product.create({
    data: {
      name: 'Cepillo de dientes',
      price: 3.0,
      stock: 50,
      categoryId: amenitiesCategory.id,
    },
  });

  const product4 = await prisma.product.create({
    data: {
      name: 'Agua embotellada',
      price: 1.0,
      stock: 300,
      categoryId: drinksCategory.id,
    },
  });

  const product5 = await prisma.product.create({
    data: {
      name: 'Chocolate',
      price: 2.0,
      stock: 150,
      categoryId: snacksCategory.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
