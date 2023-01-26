-- Deploy sitevoiles:makerTable to pg

BEGIN;

DROP TABLE "paraglider";

CREATE TABLE "paraglider"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "type" TEXT,
    "release_year" INTEGER,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "maker" TEXT
);

INSERT INTO "paraglider"("name","type","release_year","maker")
VALUES
('Tonic 2','all-rounders',2019, 'Skywalk'),
('Arcus RS','all-rounders',2017,'Swing'),
('Coden Pro','all-rounders',2016,'Dudek'),
('Coden','all-rounders',2013,'Dudek'),
('Seed Kite','training',null, 'Bruce Goldsmith Design'),
('Omega Xalps 2','all-rounders',2017,'Advance'),
('Camino','all-rounders',2019, 'Gin'),
('Mentor 6 Light','all-rounders',2019,'Nova'),
('Hadron1.1','all-rounders',2011,'Dudek'),
('Bodyguard 7','all-rounders',2017,'Papillon Paragliders'),
('XCRacer','all-rounders',2017,'Flow'),
('Gto 2','all-rounders',2015,'Gin'),
('Atlas 2','all-rounders',2018,'Gin');

COMMIT;
