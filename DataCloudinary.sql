-- Deploy sitevoiles:photo_paraglider to pg

BEGIN;

CREATE TABLE "photo_paraglider"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "photo_1" TEXT,
    "photo_2" TEXT,
    "photo_3" TEXT,
    "photo_4" TEXT,
    "photo_5" TEXT,
    "photo_6" TEXT,
    "id_paraglider" INT NOT NULL REFERENCES "paraglider"("id")
);

INSERT INTO "photo_paraglider"("photo_1","photo_2","photo_3","photo_4","photo_5","photo_6","id_paraglider")
VALUES
(null,null,null,null,null,null,1),
('https://res.cloudinary.com/daqwgsko2/image/upload/v1674839902/Paraglider/Arcus_RC/swing_arcus2rs_slider_arcuslime9_snqcyb.jpg',
'https://res.cloudinary.com/daqwgsko2/image/upload/v1674841180/Paraglider/Arcus_RC/swing_arcus2rs_slider_arcuslim4_ephyby.jpg',
'https://res.cloudinary.com/daqwgsko2/image/upload/v1674841185/Paraglider/Arcus_RC/swing_arcus2rs_slider_arcus7_ryt4bs.jpg',
'https://res.cloudinary.com/daqwgsko2/image/upload/v1674841190/Paraglider/Arcus_RC/swing_arcus2rs_slider_arcus6_oqvfii.jpg',
null,null,2),
(null,null,null,null,null,null,3),
(null,null,null,null,null,null,4),
(null,null,null,null,null,null,5),
(null,null,null,null,null,null,6),
(null,null,null,null,null,null,7),
(null,null,null,null,null,null,8),
(null,null,null,null,null,null,9),
(null,null,null,null,null,null,10),
(null,null,null,null,null,null,11),
(null,null,null,null,null,null,12),
(null,null,null,null,null,null,13);


COMMIT;
