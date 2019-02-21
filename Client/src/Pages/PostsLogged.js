import React from 'react';
import {posts} from '../mockarray';
import {NavLink} from 'react-router-dom'

export default class PostsPage extends React.Component{


render(){


    return (

        <div>

            <div>
            
                <ul className='FullPageGrid'>
                    { posts.map( ele =>{                       
                       return <li> <NavLink to={`/post/${ele._id}`}><h2>{ele.title}</h2><p>{ele.body}</p></NavLink> </li>          
                    })}
                </ul>
                
            </div>    
            
        </div>
        
        )


}
}