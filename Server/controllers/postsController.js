const Posts = require ('../models/Posts');


class PostsController {

    async find(req, res) {
        let {keyword} = req.params
        try{
            const posts = await Posts.find( { $text: { $search: keyword} } )
            console.log(posts)
        }
        catch(error){
            console.log(error)
        }
    }
    async find_single_post (req,res) {
        let{ PostID } = req.params;
        try{
            const singlePosts = await Posts.findOne({ _id:PostID})

            res.send(singlePosts)
            

        }
        catch(error){
            console.log(error)
        }

    }
    async find_by_cat (req,res) {
        let{ categoryID } = req.params;
        try{
            const catPosts = await Posts.find({ category_id:categoryID})
            res.send(catPosts)

        }
        catch(error){
            console.log(error)
        }

    }
    async find_by_user(req,res){
        let{ userID } = req.params;

        try{
            const userPosts = await Posts.find({ user_id:userID})
            console.log(userPosts)

        }
        catch(error){
            console.log(error)
        }
    }
    async create(req,res){
        console.log(' BOOOODDDDDDYYYYYYY', req.body)
            let{ categoryID, userID, body , title , photo_url } =  req.body

            try{
                const newPost = await Posts.create({
                    title:title,
                    body:body,
                    category_id:categoryID,
                    user_id:userID,
                    photo_url:photo_url,
                })
               res.send({newPost})
            }
            catch(error){
                console.log("e r r o r ",error)
            }
       
    }
    async update(req,res){
        let{ body , title , photo_url } =  req.body
        const user = req.user
        try{
            const updatePost = await Posts.updateOne({_id : user._id },
                        {
                        $set:{
                            title:title,
                            body:body,
                            photo_url:photo_url,
                        }
                        }      
            )  
            console.log(updatePost)
            }
        catch(error){
            console.log(error)
        }
    }
    async deletePost (req,res){
        let{ PostID }= req.body

        try{
            const deleteOne = await Posts.deleteOne({_id : PostID })
            res.send({deleteOne})
        }
        catch(error){
            res.send({error})
        }
    }
}



module.exports = new PostsController();
    


