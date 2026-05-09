-- CreateEnum
CREATE TYPE "ResidentStatus" AS ENUM ('PERMANENT', 'TEMPORARY', 'CONTRACT');

-- CreateEnum
CREATE TYPE "FamilyRelationship" AS ENUM ('HEAD', 'SPOUSE', 'CHILD', 'SON_IN_LAW', 'DAUGHTER_IN_LAW', 'GRANDCHILD', 'PARENT', 'PARENT_IN_LAW', 'OTHER_FAMILY', 'HELPER', 'OTHER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Religion" AS ENUM ('ISLAM', 'PROTESTANT', 'CATHOLIC', 'HINDU', 'BUDDHIST', 'CONFUCIAN');

-- CreateEnum
CREATE TYPE "Education" AS ENUM ('NO_SCHOOLING', 'ELEMENTARY', 'JUNIOR_HIGH', 'SENIOR_HIGH', 'DIPLOMA_1', 'DIPLOMA_2', 'DIPLOMA_3', 'BACHELOR', 'MASTER', 'DOCTORATE');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED');

-- CreateEnum
CREATE TYPE "Citizenship" AS ENUM ('CITIZEN', 'FOREIGN_CITIZEN');

-- CreateTable
CREATE TABLE "Rw" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "provinceCode" TEXT NOT NULL,
    "regencyCode" TEXT NOT NULL,
    "districtCode" TEXT NOT NULL,
    "villageCode" TEXT NOT NULL,

    CONSTRAINT "Rw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rt" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "rwId" TEXT NOT NULL,

    CONSTRAINT "Rt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Family" (
    "id" TEXT NOT NULL,
    "familyCardNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "residentStatus" "ResidentStatus" NOT NULL DEFAULT 'PERMANENT',
    "rtId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Family_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "nationalId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "familyId" TEXT NOT NULL,
    "isHeadOfFamily" BOOLEAN NOT NULL DEFAULT false,
    "familyRelationship" "FamilyRelationship" NOT NULL,
    "gender" "Gender" NOT NULL,
    "birthPlace" TEXT NOT NULL,
    "birthDate" DATE NOT NULL,
    "religion" "Religion" NOT NULL,
    "education" "Education",
    "occupation" TEXT,
    "maritalStatus" "MaritalStatus" NOT NULL,
    "citizenship" "Citizenship" NOT NULL DEFAULT 'CITIZEN',
    "passportNumber" TEXT,
    "kitapNumber" TEXT,
    "fatherId" TEXT,
    "motherId" TEXT,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rw_number_villageCode_key" ON "Rw"("number", "villageCode");

-- CreateIndex
CREATE UNIQUE INDEX "Rt_number_rwId_key" ON "Rt"("number", "rwId");

-- CreateIndex
CREATE UNIQUE INDEX "Family_familyCardNumber_key" ON "Family"("familyCardNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Member_nationalId_key" ON "Member"("nationalId");

-- AddForeignKey
ALTER TABLE "Rt" ADD CONSTRAINT "Rt_rwId_fkey" FOREIGN KEY ("rwId") REFERENCES "Rw"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Family" ADD CONSTRAINT "Family_rtId_fkey" FOREIGN KEY ("rtId") REFERENCES "Rt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "Family"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_fatherId_fkey" FOREIGN KEY ("fatherId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_motherId_fkey" FOREIGN KEY ("motherId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
