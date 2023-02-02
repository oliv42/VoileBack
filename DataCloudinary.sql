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
('http://res.cloudinary.com/daqwgsko2/image/upload/v1675344972/paraglider/Arcus_Rs/un2ux7r6mrizghd7uyxv.jpg',
'http://res.cloudinary.com/daqwgsko2/image/upload/v1675344973/paraglider/Arcus_Rs/hmy2nuiz1dhmjcpjq60n.jpg',
'http://res.cloudinary.com/daqwgsko2/image/upload/v1675344973/paraglider/Arcus_Rs/chpzmbqeedvzezeib5nf.jpg',
'http://res.cloudinary.com/daqwgsko2/image/upload/v1675344974/paraglider/Arcus_Rs/unqcjsr58ezutp86tlbc.jpg',
null,null,2),
('http://res.cloudinary.com/daqwgsko2/image/upload/v1675344972/paraglider/Coden_Pro/g16nqrlyddlzpjk7gshs.jpg',
null,null,null,null,null,3),
('http://res.cloudinary.com/daqwgsko2/image/upload/v1675344973/paraglider/Tonic_2/t3lrjrl96fi0t81qzyp9.jpg',
'http://res.cloudinary.com/daqwgsko2/image/upload/v1675344975/paraglider/Tonic_2/svrmcxq8bbemwr6nuhia.jpg',
'http://res.cloudinary.com/daqwgsko2/image/upload/v1675344977/paraglider/Tonic_2/ho8y8an9f8fqnnv1djuw.jpg',
'http://res.cloudinary.com/daqwgsko2/image/upload/v1675344978/paraglider/Tonic_2/vydblivw0vlezqgmpulu.jpg',
'http://res.cloudinary.com/daqwgsko2/image/upload/v1675344979/paraglider/Tonic_2/blmadx0kusjgzfd0nmft.jpg',
null,1),
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