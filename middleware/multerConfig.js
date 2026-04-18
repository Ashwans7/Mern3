const multer = require('multer')
//resuable
//multermethod
 const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./storage') //cb(error,success)
    },
    filename : function(req,file,cb){
        cb(null,Date.now()+ "-"+file.originalname)

    }
 })
module.exports = {
    multer,
    storage
}
