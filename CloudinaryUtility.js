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

const createFolder = async (folderPath, subfolderName = "") => {
    cloudinary.api.create_folder(
        folderPath + "/" + subfolderName,
        function (error, result) {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
            }
        }
    );
};

const uploadImage = async (imagePath, folderTree) => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };

    try {
        const result = await cloudinary.uploader.upload(imagePath, options, {
            folder: folderTree,
        });
        return result.url;
    } catch (error) {
        console.error(error);
    }
};

const photoSeedingSQLSart = `-- Deploy sitevoiles:photo_paraglider to pg

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
`;

const photoSeedingSQLEnd = `(null,null,null,null,null,null,4),
(null,null,null,null,null,null,5),
(null,null,null,null,null,null,6),
(null,null,null,null,null,null,7),
(null,null,null,null,null,null,8),
(null,null,null,null,null,null,9),
(null,null,null,null,null,null,10),
(null,null,null,null,null,null,11),
(null,null,null,null,null,null,12),
(null,null,null,null,null,null,13);


COMMIT;`;
//Psedocode pour la génération de la table qui fera le Seeding:
//Etape 1 Upload les photos
//parcour du dossier de photos
// création des dossier en sur Cloudinary et upload des images
// Récuperation des url
//Génération du fichier SQL en incluant les URL

const imageSeeding = async () => {
    const pathImages = "/home/olivier/Images/Paraglider";
    const folders = fs.readdirSync(pathImages);

    const foldersTreeImagesFiles = folders.map((subfolder) => {
        const pathImagesSubFolder = pathImages + "/" + subfolder;
        const filesSubFolder = fs.readdirSync(pathImagesSubFolder);

        const ImagesParagilder = filesSubFolder.filter((file) =>
            file.includes(".")
        );
        const colorParaglider = fs.readdirSync(pathImagesSubFolder + "/Color");

        const treeImageFiles = {
            subfolderName: subfolder,
            ImagesParagilder: ImagesParagilder,
            color: colorParaglider,
        };

        return treeImageFiles;
    });

    // Upload images and getting the url of them
    const allUrl = foldersTreeImagesFiles.map(async (paraFolder) => {
        const uploadAllImage = paraFolder.ImagesParagilder.reduce(
            (accu, image, index) => {
                return accu.then(async (result) => {
                    const pathfolder =
                        pathImages + "/" + paraFolder.subfolderName;
                    const pathImage = pathfolder + "/" + image;
                    const folderCoulidinary =
                        "paraglider/" + paraFolder.subfolderName;
                    const url = await uploadImage(pathImage, folderCoulidinary);
                    return { ...result, urls: [...result.urls, url] };
                });
            },
            Promise.resolve({ name: paraFolder.subfolderName, urls: [] })
        );

        const UrlImageParaglider = await uploadAllImage;
        return UrlImageParaglider;
    });

    const allUrlImages = await Promise.all(allUrl);
    console.log(allUrlImages);

    const seedingPhoto = allUrlImages.reduce((accu, urlsImages) => {
        // (null,null,null,null,null,null,4)
        const idValue = {
            Arcus_Rs: 2,
            Coden_Pro: 3,
            Tonic_2: 1,
        };
        let sqlEntry = "(";

        for (let i = 0; i < 6; i++) {
            urlsImages.urls[i]
                ? (sqlEntry += "'" + urlsImages.urls[i] + "',\n")
                : (sqlEntry += "null,");
        }
        sqlEntry += `${idValue[urlsImages.name]}),\n`;

        return (accu += sqlEntry);
    }, "");

    const finaleSeeding = photoSeedingSQLSart + seedingPhoto + photoSeedingSQLEnd;
    console.log(finaleSeeding)

    writeTofile("DataCloudinary.sql", finaleSeeding);
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


imageSeeding();

// DelecteAllImagesCloudinary();
