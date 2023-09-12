/*
  Warnings:

  - You are about to drop the column `usersId` on the `token` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_token" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "refreshToken" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_token" ("created", "id", "refreshToken", "updated", "userId") SELECT "created", "id", "refreshToken", "updated", "userId" FROM "token";
DROP TABLE "token";
ALTER TABLE "new_token" RENAME TO "token";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
