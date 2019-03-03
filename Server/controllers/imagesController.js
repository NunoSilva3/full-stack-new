const Images = require('../models/Images')
const cloudinary = require ('cloudinary');



class ImagesController {

    async find(req, res) {
        let {postID , CategoryID} = req.params
        try{
            const images = await Images.find({post_id: postID}||{category_id:CategoryID})
            res.send({images})
        }
        catch(error){
            res.send(error)
        }
    }

    async addImages (req,res) {
        //let{photoUrl, photoId} = req.params


    try{
        
        const added = await Images.create({
            my_url:req.body.photo_url,
            my_public_id: req.body.public_id,

        })
     
        res.send(added)
    }
    catch(error){
 
        res.send(error)
    }
}

    async delete(req, res){
        console.log("======================  * * ======================", req.body)
        try{
            const removed = await cloudinary.v2.api.delete_resources([req.body.public_id])
            console.log(" r e m o v e d", removed)
        }
        catch(error){
            console.log("the e r r o r ",error)
        }
    }

    


}
module.exports = new ImagesController();