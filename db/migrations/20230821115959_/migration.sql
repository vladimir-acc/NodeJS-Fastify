/*
  Warnings:

  - You are about to drop the column `data` on the `blog` table. All the data in the column will be lost.
  - Added the required column `date` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_blog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "bref" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "tagsId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "blog_tagsId_fkey" FOREIGN KEY ("tagsId") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_blog" ("alt", "bref", "content", "href", "id", "published", "src", "tagsId", "title") SELECT "alt", "bref", "content", "href", "id", "published", "src", "tagsId", "title" FROM "blog";
DROP TABLE "blog";
ALTER TABLE "new_blog" RENAME TO "blog";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
