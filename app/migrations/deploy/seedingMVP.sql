-- Deploy sitevoiles:seedingMVP to pg

BEGIN;

INSERT INTO "paraglider"("name","type","release_year")
VALUES
('Tonic 2','all-rounders',2019),
('Arcus RS','all-rounders',2017),
('Coden Pro','all-rounders',2016),
('Coden','all-rounders',2013),
('Seed Kite','training',null),
('Omega Xalps 2','all-rounders',2017),
('Camino','all-rounders',2019),
('Mentor 6 Light','all-rounders',2019),
('Hadron1.1','all-rounders',2011),
('Bodyguard 7','all-rounders',2017),
('XCRacer','all-rounders',2017);

COMMIT;
