-- CreateTable
CREATE TABLE "course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT
);

-- CreateTable
CREATE TABLE "course_terms" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "duration" TEXT DEFAULT 'З’ясовуй у адміна',
    "period" TEXT DEFAULT 'З’ясовуй у адміна',
    "cost" TEXT DEFAULT 'З’ясовуй у адміна',
    "link" TEXT,
    "courseId" INTEGER NOT NULL,
    CONSTRAINT "course_terms_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
