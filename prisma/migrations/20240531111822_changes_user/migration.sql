/*
  Warnings:

  - Added the required column `receiverId` to the `Recommendation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recommendation" ADD COLUMN     "receiverId" TEXT NOT NULL,
ADD COLUMN     "text" TEXT,
ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "rating" SET DEFAULT 0,
ALTER COLUMN "languageId" SET DEFAULT 1;

-- AddForeignKey
ALTER TABLE "Recommendation" ADD CONSTRAINT "Recommendation_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
