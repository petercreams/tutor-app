import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
  var testowy: 'xD';
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  // globalThis if not affected by the hot reload
  globalThis.prisma = db;
}

console.log(globalThis.testowy);

