const Categories = require ('../models/Categories');


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
    
    async create(req,res){
        console.log(' BOOOODDDDDDYYYYYYY', req.body)
            let{ userID, name , photo_url } =  req.body

            try{
                const newCategory = await Categories.create({


                    name: name,
                    photoUrl: photo_url,
                    user_id: userID
                
                })
               res.send(newCategory)
            }
            catch(error){
                console.log("e r r o r ",error)
            }
       
    }
    
    async deleteCategory (req,res){
        let{ categoryID }= req.body

        try{
            const deleteOne = await Categories.deleteOne({_id : categoryID })
            res.send({deleteOne})
        }
        catch(error){
            res.send({error})
        }
    }
}



module.exports = new CategoriesController();
    


