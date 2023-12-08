const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
var path = require('path');

// AWS 
aws.config.update({
  secretAccessKey: 'WNM0q+7MEsTL1FSGeaA2W6XzaaRISUp/nQ32tSff',
  accessKeyId: 'AKIAXJ2OY6TQ76ZYCC22',
  region: 'us-east-1'
});

  const s3 = new aws.S3();


  const upload = multer({
    storage: multerS3({
      acl: 'public-read',
      s3,
      bucket: 'isnitched',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      metadata: function (req, file, cb) {
        cb(null, {fieldName: 'TESTING_METADATA'});
      },
      key: function (req, file, cb) {
        var fileName = file.originalname.toLowerCase();
        cb(null, Date.now().toString()+fileName)
      }
    })
  });

    module.exports = upload;