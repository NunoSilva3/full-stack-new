import React from 'react';

import {NavLink} from 'react-router-dom'
import axios from 'axios';


export default class CategoriesPage extends React.Component{

    state = {
        categories : []
      }

    componentDidMount(){
        debugger
        var url = `http://localhost:3003/categories/showall`
        axios.get(url)
        .then ((res)=>{
          
            this.setState({categories:res.data})               
        })
        .catch((error)=>{
             
        })
}


render(){
    

return (

<div>

    <div>
        <ul className='FullPageGridCat'>
            { this.state.categories.map( ele =>{
               return <li> <NavLink to={`/posts/${ele._id}`}>{ele.name}<img src={ele.photoUrl}></img></NavLink> </li>          
            })}
        </ul>
    </div>    

</div>

)

}


}