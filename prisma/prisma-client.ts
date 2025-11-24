//import { PrismaClient } from '@prisma/client/index';
//import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from './lib/generated/prisma'


export const prisma = new PrismaClient()

/*const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;*/
