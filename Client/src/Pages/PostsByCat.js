import React from 'react';
import {posts} from '../mockarray';
import {NavLink} from 'react-router-dom';
import axios from 'axios'


export default class SinglePostPage extends React.Component{
   state={

    arr : [],

   }

   
    componentDidMount(){
        
        
        var url = `http://localhost:3003/posts/category/${this.props.match.params.categoryID}`
        axios.get(url)
        .then ((res)=>{
          
            this.setState({arr:res.data})    
         
        })
        .catch((error)=>{
             
        })
    }

    render(){
        
        
        return (
            

        <div>
                <h2 id='CreatePost'><NavLink to={`/CreatePost/${this.props.match.params.categoryID}`}>Click Here to create your post</NavLink></h2>
            <div>
            
                <ul className='FullPageGrid'>
                    { this.state.arr.map( ele =>{                      
                       return <li> <NavLink to={`/post/${ele._id}`}><h2>{ele.title}</h2><p>{ele.body}</p></NavLink></li>          
                    })}
                </ul>
                
            </div>    
                
        </div>
        
        )}
        


    



}