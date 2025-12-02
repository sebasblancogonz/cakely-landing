import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

let prismaInstance: PrismaClient

if (!globalForPrisma.prisma) {
  // Crear el adapter de PostgreSQL para Prisma 7
  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  })

  const adapter = new PrismaPg(pool)

  prismaInstance = new PrismaClient({ adapter })

  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prismaInstance
  }
} else {
  prismaInstance = globalForPrisma.prisma
}

export const prisma = prismaInstance
