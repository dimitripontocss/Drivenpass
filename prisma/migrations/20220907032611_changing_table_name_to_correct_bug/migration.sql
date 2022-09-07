/*
  Warnings:

  - You are about to drop the `credentials` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "credentials" DROP CONSTRAINT "credentials_userId_fkey";

-- DropTable
DROP TABLE "credentials";

-- CreateTable
CREATE TABLE "safeCredentials" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "title" VARCHAR(50) NOT NULL,
    "url" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "safeCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "safeCredentials_userId_title_key" ON "safeCredentials"("userId", "title");

-- AddForeignKey
ALTER TABLE "safeCredentials" ADD CONSTRAINT "safeCredentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
