-- CreateTable
CREATE TABLE "camp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "title" TEXT,
    "link" TEXT,
    "ico" TEXT,
    "price" TEXT
);

-- CreateTable
CREATE TABLE "camp_terms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subtitle" TEXT,
    "period" TEXT,
    "other" TEXT,
    "orderId" INTEGER NOT NULL DEFAULT 1,
    "campId" INTEGER NOT NULL,
    CONSTRAINT "camp_terms_campId_fkey" FOREIGN KEY ("campId") REFERENCES "camp" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_login_key" ON "users"("login");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
