import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom'

export default class PostsPage extends React.Component{
state = {
    keyword: '',
    posts: []

}


componentDidMount(){

    this.handleSubmit()

}


handleOnchange = e =>{

this.setState({[e.target.name]:e.target.value})

}

handleSubmit = e => {
   e ? e.preventDefault() : null
    
    var url = `http://localhost:3003/posts/Search_Posts/${this.state.keyword || "all"}`
    axios.get(url)
    .then ((res)=>{
      debugger
        this.setState({posts:res.data})               
    })
    .catch((error)=>{
         
    })

}
    
    


render(){


    return (

        <div style={{marginTop:"100px"}}>

            <form style={{ textAlign: "center"}}
            onSubmit={this.handleSubmit}>
            <input  style={{ textAlign: "center"}}
                    onChange={this.handleOnchange}
                    name ='keyword' 
                    value ={this.state.keyword} 
                    placeholder='Search posts'
                /><br></br>
                <button>Search</button>
            </form>

            <div>
            
            
                <ul className='FullPageGrid'>
                    { this.state.posts.map( ele =>{                       
                       return <li> <NavLink to={`/post/${ele._id}`}><h2>{ele.title}</h2><p>{ele.body}</p></NavLink> </li>          
                    })}
                </ul>
                
            </div>    
            
        </div>
        
        )


}
}