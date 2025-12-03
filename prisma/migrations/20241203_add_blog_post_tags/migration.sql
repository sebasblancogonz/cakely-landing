-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
