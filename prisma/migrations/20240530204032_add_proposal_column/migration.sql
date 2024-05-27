-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "ProposalId" INTEGER;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_ProposalId_fkey" FOREIGN KEY ("ProposalId") REFERENCES "Proposal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
