import cloudinary from "cloudinary";
import fs from "fs";
import dotenv from 'dotenv';
dotenv.config();

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_KEY_CLOUDINARY_PASSWORD,
});


const DelecteAllImagesCloudinary = async () => {

    const tableImageCoulydinary = await cloudinary.v2.api.resources();

    tableImageCoulydinary.resources.map( async (asset) => {
        console.log(`the asset : ${asset.public_id} will be delete from the cloud =>`);
        await cloudinary.v2.uploader.destroy(asset.public_id).then(res => console.log(res))

    })

    return null;
}


const writeTofile = async (fileName, data) => {
    try {
        await fs.writeFileSync(fileName, data);
        console.log(`Wrote data to ${fileName}`);
      } catch (error) {
        console.error(`Got an error trying to write the file: ${error.message}`);
      } finally {
        console.log('operation terminé')
      }
}

writeTofile('DataCloudinary.txt', 'testOlivier');
