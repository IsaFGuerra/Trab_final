/*
  Warnings:

  - You are about to drop the `refund` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "refund";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Refund" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "SolicitateDate" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "approvedDate" DATETIME,
    "rejectedDate" DATETIME,
    "managerId" INTEGER,
    "employeeId" INTEGER,
    CONSTRAINT "Refund_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Refund_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
