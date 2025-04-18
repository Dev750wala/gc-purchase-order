/*
  Warnings:

  - Added the required column `empId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- First, add the columns as nullable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "empId" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "pfpUrl" TEXT,
ADD COLUMN     "phoneNumber" INTEGER,
ADD COLUMN     "role" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Update existing records with default values
UPDATE "User" SET 
    "empId" = 'DEFAULT',
    "password" = 'DEFAULT',
    "phoneNumber" = 0,
    "role" = 'USER',
    "updatedAt" = CURRENT_TIMESTAMP;

-- Make the columns required
ALTER TABLE "User" ALTER COLUMN "empId" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "role" SET NOT NULL;

-- CreateTable
CREATE TABLE "PurchaseOrder" (
    "id" TEXT NOT NULL,
    "masterPO" BOOLEAN NOT NULL,
    "PO" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "attention" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "ext" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "holdToShipYes" BOOLEAN NOT NULL,
    "holdToShipNo" BOOLEAN NOT NULL,
    "pickUp" BOOLEAN NOT NULL,
    "shipTo" BOOLEAN NOT NULL,
    "driverContact" TEXT NOT NULL,
    "driverTel" TEXT NOT NULL,
    "siteContact" TEXT NOT NULL,
    "siteTel" TEXT NOT NULL,
    "address2" TEXT NOT NULL,
    "deliveryNotes" TEXT NOT NULL,
    "date1" TEXT NOT NULL,
    "time1" TEXT NOT NULL,
    "date2" TEXT NOT NULL,
    "time2" TEXT NOT NULL,
    "date3" TEXT NOT NULL,
    "time3" TEXT NOT NULL,
    "date4" TEXT NOT NULL,
    "time4" TEXT NOT NULL,
    "jobNumber" TEXT NOT NULL,
    "jobName" TEXT NOT NULL,
    "jobTask" TEXT NOT NULL,
    "officeContact" TEXT NOT NULL,
    "officeTel" TEXT NOT NULL,
    "requestedBy" TEXT NOT NULL,
    "orderedBy" TEXT NOT NULL,
    "rightDate" TEXT NOT NULL,
    "rightTime" TEXT NOT NULL,
    "coCe" TEXT NOT NULL,
    "rightNotes" TEXT NOT NULL,
    "approxCost" TEXT NOT NULL,
    "amex" BOOLEAN NOT NULL,
    "amexText" TEXT NOT NULL,
    "cod" BOOLEAN NOT NULL,
    "onAccount" BOOLEAN NOT NULL,
    "other" BOOLEAN NOT NULL,
    "otherText" TEXT NOT NULL,
    "taxExemptYes" BOOLEAN NOT NULL,
    "taxExemptNo" BOOLEAN NOT NULL,
    "vendorQuoteYes" BOOLEAN NOT NULL,
    "vendorQuoteNo" BOOLEAN NOT NULL,
    "ccPo" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "authorSignature" TEXT NOT NULL,
    "pmName" TEXT NOT NULL,
    "pmSignature" TEXT NOT NULL,
    "approvedBy" TEXT NOT NULL,
    "approvedDate" TEXT NOT NULL,
    "rightBottomNotes" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "um" TEXT NOT NULL,
    "unitCost" TEXT NOT NULL,
    "total" TEXT NOT NULL,
    "jobEquipNotes" TEXT NOT NULL,
    "costCode" TEXT NOT NULL,
    "payItem" TEXT NOT NULL,
    "subtotal" TEXT NOT NULL,
    "delivery" TEXT NOT NULL,
    "salesTax" TEXT NOT NULL,
    "bottomOther" TEXT NOT NULL,
    "grandTotal" TEXT NOT NULL,
    "sign" TEXT NOT NULL,
    "signDate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PurchaseOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PurchaseOrder" ADD CONSTRAINT "PurchaseOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
