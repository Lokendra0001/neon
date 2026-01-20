-- AlterTable
ALTER TABLE "emp" ADD COLUMN     "phoneNo" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "pName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
