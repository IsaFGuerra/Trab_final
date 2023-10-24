/*
  Warnings:

  - You are about to drop the column `approvedDate` on the `Refund` table. All the data in the column will be lost.
  - You are about to drop the column `rejectedDate` on the `Refund` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Refund" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "solicitateDate" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "modificationDate" DATETIME,
    "managerId" INTEGER,
    "employeeId" INTEGER,
    CONSTRAINT "Refund_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Refund_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Refund" ("description", "employeeId", "id", "managerId", "price", "solicitateDate", "status") SELECT "description", "employeeId", "id", "managerId", "price", "solicitateDate", "status" FROM "Refund";
DROP TABLE "Refund";
ALTER TABLE "new_Refund" RENAME TO "Refund";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
