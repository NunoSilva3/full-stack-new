const Images = require('../models/Images')

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

}
module.exports = new ImagesController();