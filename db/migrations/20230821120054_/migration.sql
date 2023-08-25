-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_blog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "bref" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "alt" TEXT,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "tagsId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "blog_tagsId_fkey" FOREIGN KEY ("tagsId") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_blog" ("alt", "bref", "content", "date", "href", "id", "published", "src", "tagsId", "title") SELECT "alt", "bref", "content", "date", "href", "id", "published", "src", "tagsId", "title" FROM "blog";
DROP TABLE "blog";
ALTER TABLE "new_blog" RENAME TO "blog";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
