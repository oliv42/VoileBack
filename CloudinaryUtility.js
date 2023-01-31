import cloudinary from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_KEY_CLOUDINARY_PASSWORD,
});

const DelecteAllImagesCloudinary = async () => {
    const tableImageCoulydinary = await cloudinary.v2.api.resources();

    tableImageCoulydinary.resources.map(async (asset) => {
        console.log(
            `the asset : ${asset.public_id} will be delete from the cloud =>`
        );
        await cloudinary.v2.uploader
            .destroy(asset.public_id)
            .then((res) => console.log(res));
    });

    return null;
};

const photoSeedingSQL = `-- Deploy sitevoiles:photo_paraglider to pg

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
`;

//Psedocode pour la génération de la table qui fera le Seeding:
//Etape 1 Upload les photos
//parcour du dossier de photos
// création des dossier en sur Cloudinary et upload des images
// Récuperation des url
//Génération du fichier SQL en incluant les URL

const ImageSeeding = async () => {

    const pathImagesParaglider = "/home/olivier/Images/Paraglider"
    const folders = fs.readdirSync(pathImagesParaglider);

    const foldersTreeImagesFiles = folders.map( (subfolder) => {

        const pathImagesSubFolder = pathImagesParaglider + '/' + subfolder;
        const filesSubFolder = fs.readdirSync(pathImagesSubFolder)

        const ImagesParagilder = filesSubFolder.filter((file) => file.includes('.'))

        const treeImageFiles = {
            directoryName: subfolder,
            ImagesParagilder: ImagesParagilder
        }


        return treeImageFiles;
    })

    console.log(foldersTreeImagesFiles);
};

const writeTofile = async (fileName, data) => {
    try {
        await fs.writeFileSync(fileName, data);
        console.log(`Wrote data to ${fileName}`);
    } catch (error) {
        console.error(
            `Got an error trying to write the file: ${error.message}`
        );
    } finally {
        console.log("operation terminé");
    }
};

// writeTofile("DataCloudinary.sql", photoSeedingSQL);
ImageSeeding();


// DelecteAllImagesCloudinary();
