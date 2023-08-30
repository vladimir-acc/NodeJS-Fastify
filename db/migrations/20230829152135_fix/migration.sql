-- CreateTable
CREATE TABLE "types_of_courses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "typeId" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "course_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "types_of_courses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_course" ("id", "title") SELECT "id", "title" FROM "course";
DROP TABLE "course";
ALTER TABLE "new_course" RENAME TO "course";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
