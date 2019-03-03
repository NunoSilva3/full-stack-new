const Categories = require ('../models/Categories');
const Posts = require ('../models/Posts');
const Comments = require ('../models/Comments')


class CategoriesController {

    async showAll (req, res) {

        try{
            const allCategories = await Categories.find({})
            res.send(allCategories)
        }
        catch(error){
            console.log({error})
        }
        
    }

    async find_by_user(req,res){
        console.log('USER DATA', req.user)

        try{
            const userCategories = await Categories.find({ user_id:req.user._id})
            console.log('RES DATA ==========>', userCategories)
            res.send(userCategories)


        }
        catch(error){
            console.log(error)
        }
    }
    
    async create(req,res){
        console.log(' BOOOODDDDDDYYYYYYY', req.body)
            let{ name , photoUrl } =  req.body

            try{
                const newCategory = await Categories.create({


                    name: name,
                    photoUrl: photoUrl,
                    user_id: req.user._id,
                
                })
               res.send(newCategory)
            }
            catch(error){
                console.log("e r r o r ",error)
            }
       
    }
    
    async deleteCategory (req,res){
        console.log('BODDDDDDYYYYYYY',req.body)
        let{ categoryID }= req.body

        try{
            const deleteOne = await Categories.deleteOne({_id : categoryID })
            console.log('deleteOne======>',deleteOne)
 
           try {
                const myPosts = await Posts.find({category_id: categoryID})
                let  postIds= myPosts.map(ele => ele._id)
                const deletePosts = await Posts.deleteMany({category_id: categoryID})
                console.log('deletePosts======>',deletePosts)
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
        catch(error){
            res.send({error})
        }
    }
}



module.exports = new CategoriesController();
    


