-- CreateTable
CREATE TABLE "blog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
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

-- CreateTable
CREATE TABLE "image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "href" TEXT NOT NULL,
    "blogId" INTEGER NOT NULL,
    CONSTRAINT "image_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blog" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "galery" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "href" TEXT NOT NULL,
    "galeryId" INTEGER NOT NULL,
    CONSTRAINT "galery_galeryId_fkey" FOREIGN KEY ("galeryId") REFERENCES "blog" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT
);
