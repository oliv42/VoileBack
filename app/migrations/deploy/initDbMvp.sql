-- Deploy sitevoiles:initDbMvp to pg

BEGIN;

-- minimum DB mvp

CREATE TABLE "paraglinding"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "type" TEXT,
    "release_year" INTEGER,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMIT;
