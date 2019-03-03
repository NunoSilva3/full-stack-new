const Posts = require ('../models/Posts');
const Comments = require ('../models/Comments')

class PostsController {

    async find(req, res) {
        let {keyword} = req.params
        if(keyword === "all"){
            try{
                const posts = await Posts.find( {  } )
                return res.send(posts)
            }
            catch(error){
                return console.log(error)
            }

        }
        try{
            const posts = await Posts.find( { body: { $regex: keyword, $options:'i'} } )
            res.send(posts)
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
        console.log('USER DATA', req.user)

        try{
            const userPosts = await Posts.find({ user_id:req.user._id})
            res.send(userPosts)


        }
        catch(error){
            console.log(error)
        }
    }
    async create(req,res){

            let{ categoryID, body , title , photo_url } =  req.body

            try{
                const newPost = await Posts.create({
                    title:title,
                    body:body,
                    category_id:categoryID,
                    user_id:req.user._id,
                    photo_url:photo_url,
                })
                console.log(newPost)
               res.send({newPost})
            }
            catch(error){
                console.log("e r r o r ",error)
                res.send({error})
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
        console.log(req.body)
        let{ PostID }= req.body

        try {
            const myPosts = await Posts.find({_id: PostID})
            console.log('==========>',myPosts)
            let  postIds= myPosts.map(ele => ele._id)
            const deleteOne = await Posts.deleteOne({_id: PostID})
            console.log('deleteOne======>',deleteOne)
           try {

                const deleteComments = await Comments.deleteMany({post_id: {'$in':postIds}})
                console.log('deleteComments======>',deleteComments)
                           res.send({deleteOne})
            } catch (error) {
                console.log(error)
            }
        } catch (error) {
            console.log(error)
        }
    }
}



module.exports = new PostsController();
    


