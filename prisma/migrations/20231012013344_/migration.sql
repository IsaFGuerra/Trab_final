-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_refund" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "SolicitateDate" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "approvedDate" DATETIME,
    "reproveDate" DATETIME
);
INSERT INTO "new_refund" ("SolicitateDate", "approvedDate", "description", "id", "price", "reproveDate", "status") SELECT "SolicitateDate", "approvedDate", "description", "id", "price", "reproveDate", "status" FROM "refund";
DROP TABLE "refund";
ALTER TABLE "new_refund" RENAME TO "refund";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
