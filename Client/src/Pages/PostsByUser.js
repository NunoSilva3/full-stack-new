import React from 'react';
import {posts} from '../mockarray';
import {NavLink} from 'react-router-dom';


export default class PostsByUser extends React.Component{



    render(){
console.log(this.props)

        return (

        <div>
            
                <ul className='FullPageGrid'>
                    { posts.map( ele =>{     
                        if(this.props.match.params.userID == ele.owner)                  
                       return <li> <NavLink to={`/post/${ele._id}`}><h2>{ele.title}</h2><p>{ele.body}</p></NavLink></li>          
                    })}
                </ul>
                
  
        </div>
        
        )

    }



}