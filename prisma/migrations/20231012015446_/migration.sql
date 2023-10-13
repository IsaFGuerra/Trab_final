/*
  Warnings:

  - You are about to drop the column `reproveDate` on the `refund` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_refund" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "SolicitateDate" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "approvedDate" DATETIME,
    "rejectedDate" DATETIME,
    "userId" INTEGER,
    CONSTRAINT "refund_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_refund" ("SolicitateDate", "approvedDate", "description", "id", "price", "status", "userId") SELECT "SolicitateDate", "approvedDate", "description", "id", "price", "status", "userId" FROM "refund";
DROP TABLE "refund";
ALTER TABLE "new_refund" RENAME TO "refund";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
