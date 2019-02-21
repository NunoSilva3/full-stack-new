const Images = require('../models/Images')

class ImagesController {

    async find(req, res) {
        let {postID , CategoryID} = req.params
        try{
            const images = await Images.find({post_id: postID}||{CategoryID:CategoryID})
            res.send({images})
        }
        catch(error){
            res.send(error)
        }
    }

    async addImages (req,res) {
    let {PostID , CategoryID} = req.body

    try{
        const added = await Images.create({
            my_url:req.body.photo_url,
            my_public_id: req.body.public_id,
            PostID:PostID,
            CategoryID:CategoryID,
        })
        console.log({added })
    }
    catch(error){
        console.log(error);
        res.send({error})
    }

}
}
module.exports = new ImagesController();