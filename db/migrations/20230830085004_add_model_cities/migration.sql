-- CreateTable
CREATE TABLE "cities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "src" TEXT DEFAULT 'https://maps.google.com/maps?width=1180&amp;height=475&amp;hl=uk&amp;q=insha osvita kremenchug&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
);
