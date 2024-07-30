const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // IDs válidos para atualização
  const updates = [
    { id: 50, userId: 1 },
    { id: 51, userId: 1 },
  ];

  for (const update of updates) {
    const huntLog = await prisma.huntLog.findUnique({
      where: { id: update.id },
    });

    if (huntLog) {
      await prisma.huntLog.update({
        where: { id: update.id },
        data: { userId: update.userId },
      });
      console.log(`Updated HuntLog with id ${update.id}`);
    } else {
      console.log(`HuntLog with id ${update.id} not found`);
    }
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });