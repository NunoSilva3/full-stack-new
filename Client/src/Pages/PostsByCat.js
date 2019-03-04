import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios'


export default class PostPage extends React.Component{
   state={

    arr : [],

   }
   componentWillMount(){
       console.log('PROPSSSSSSSSS',this.props)
   }
   
    componentDidMount(){
        debugger
        
        var url = `http://localhost:3003/posts/category/${this.props.match.params._id}`
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
            
                <ul className='FullPageGrid'>
                    { this.state.arr.map( ele =>{         
                        if(ele.photo_url)    return <li> <NavLink to={`/post/${ele._id}`}><h2>{ele.title}</h2><img src={`${ele.photo_url}`}></img><p>{ele.body}</p></NavLink></li>
                        return <li> <NavLink to={`/post/${ele._id}`}><h2>{ele.title}</h2><p>{ele.body}</p></NavLink></li>         
                                 
                    })}
                </ul>
                
            </div>    
                

        
        )}
        
}