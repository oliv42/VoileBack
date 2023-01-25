-- Deploy sitevoiles:makerTable to pg

BEGIN;

DROP TABLE "paraglider";

CREATE TABLE "maker"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE "paraglider"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "type" TEXT,
    "release_year" INTEGER,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "idMaker" INT NOT NULL REFERENCES "maker"("id")
);

INSERT INTO "maker"("name")
VALUES
('Skywalk'),
('Swing'),
('Dudek'),
('Bruce Goldsmith Design'),
('Advance'),
('Gin'),
('Nova'),
('Papillon Paragliders'),
('Flow');


INSERT INTO "paraglider"("name","type","release_year","idMaker")
VALUES
('Tonic 2','all-rounders',2019,1),
('Arcus RS','all-rounders',2017,2),
('Coden Pro','all-rounders',2016,3),
('Coden','all-rounders',2013,3),
('Seed Kite','training',null,4),
('Omega Xalps 2','all-rounders',2017,5),
('Camino','all-rounders',2019,6),
('Mentor 6 Light','all-rounders',2019,7),
('Hadron1.1','all-rounders',2011,3),
('Bodyguard 7','all-rounders',2017,8),
('XCRacer','all-rounders',2017,9),
('Gto 2','all-rounders',2015,6),
('Atlas 2','all-rounders',2018,6);

COMMIT;
