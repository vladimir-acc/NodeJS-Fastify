/*
  Warnings:

  - You are about to drop the column `orderId` on the `camp_terms` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "scool" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "title" TEXT,
    "link" TEXT,
    "ico" TEXT,
    "price" TEXT,
    "assignId" INTEGER NOT NULL,
    CONSTRAINT "scool_assignId_fkey" FOREIGN KEY ("assignId") REFERENCES "assignment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "scool_terms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subtitle" TEXT,
    "period" TEXT,
    "other" TEXT,
    "sortId" INTEGER NOT NULL DEFAULT 1,
    "scoolId" INTEGER NOT NULL,
    CONSTRAINT "scool_terms_scoolId_fkey" FOREIGN KEY ("scoolId") REFERENCES "scool" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "assignment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_camp_terms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subtitle" TEXT,
    "period" TEXT,
    "other" TEXT,
    "sortId" INTEGER NOT NULL DEFAULT 1,
    "campId" INTEGER NOT NULL,
    CONSTRAINT "camp_terms_campId_fkey" FOREIGN KEY ("campId") REFERENCES "camp" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_camp_terms" ("campId", "id", "other", "period", "subtitle") SELECT "campId", "id", "other", "period", "subtitle" FROM "camp_terms";
DROP TABLE "camp_terms";
ALTER TABLE "new_camp_terms" RENAME TO "camp_terms";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
