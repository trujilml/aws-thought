const { v4: uuidv4 } = require('uuid');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      // Replace the <My_Bucket_Name> with the name of your own S3 bucket
      Bucket: 'user-images-2db3c9a4-e3ca-4120-80f2-ec070c4b10eb',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
    };
  
    return imageParams;
  };

  module.exports = params;