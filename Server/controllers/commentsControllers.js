const Comments = require('../models/Comments')

class CommentsController {

    async find(req, res) {
        let {postID} = req.params
        console.log('PARAMS=============>',req.params)
        try{
            const comments = await Comments.find({post_id: postID})
            res.send({comments})
        }
        catch(error){
            res.send(error)
        }
    }
    async find_by_user(req,res) {
        let{ userID } = req.params;
        try{
            const userComments = await Comments.find({user_id: userID})
            res.send({userComments})

        }
        catch(error){
            res.send(error)
        }

    }
    async create(req,res){
        console.log(' BOOOODDDDDDYYYYYYY', req.body)
            let{ post_id, userID, body } =  req.body

            try{
                const newComment = await Comments.create({

                    body:body,
                   post_id:post_id,
                   user_id:req.user._id,
           
           })
               res.send({message:"Great Job!!"})
            }
            catch(error){
                console.log("e r r o r ",error)
            }
       
    }
    async update(req,res){
        let{ CommentID, body } =  req.body
        try{
            const updateComment = await Comments.updateOne({_id : CommentID },
                        {
                        $set:{
                            body:body,
                        }
                        }      
            )  
            res.send({updateComment})
            }
        catch(error){
            console.log(error)
        }
    }
    async deleteComment (req,res){
        let{ CommentID }= req.body

        try{
            const deleteOne = await Comments.deleteOne({_id : CommentID })
            res.send({deleteOne})
        }
        catch(error){
            res.send({error})
        }
    }
}



module.exports = new CommentsController();