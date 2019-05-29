import React from 'react';
import axios from 'axios';


export default class SinglePostPage extends React.Component{
    state={
        postTitle:"",
        postBody:"",
        postUser_id:"",
        postPhoto_url:"",
        PostID:'',
        comments:[],
        newcommentbody:'',

    }

    componentDidMount(){
        
        
        var url = `http://localhost:3003/posts/posts/${this.props.match.params._id}`
        axios.get(url)
        .then ((res)=>{
            this.findComments()

            this.setState({
                postTitle:res.data.title,
                postBody:res.data.body,
                Postuser_id:res.data.user_id,
                postPhoto_url: res.data.photo_url,
                postID:this.props.match.params._id,
            })    

        })
        .catch((error)=>{
             
        })
    }
    findComments=()=>{
        debugger
        var url2 = `http://localhost:3003/comments/${this.props.match.params._id}`
        axios.get(url2)
        .then ((res)=>{
            this.setState({
                comments:res.data.comments,
            })   

                
         
        })
        .catch((error)=>{
             
        })
        
    }
    handleChange = e => this.setState({[e.target.name]:e.target.value})
    handleSubmit = e => { 
        e.preventDefault()
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
        var url = `http://localhost:3003/comments/create`
        axios.post(url, 
            {
                body:this.state.newcommentbody,
                post_id:this.props.match.params._id
       
       }
            )
        .then ((res)=>{
            this.findComments()
            setTimeout(()=>{
                var scrollingElement = (document.scrollingElement || document.body);
                scrollingElement.scrollTop = scrollingElement.scrollHeight; 
                            
            },50)

        })
        .catch((error)=>{
            console.log(error)

        })

        }

    render(){
        console.log(this.state)

        if(!this.state.postPhoto_url){

            return (
            
                <div>  
                    
                    <div>
                        <ul className='SinglePostPage'>                    
                            <li> <h2>{this.state.postTitle}</h2><p>{this.state.postBody}</p> </li>                           
                        </ul>
                    </div>
                    <form
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        className="commentform"
                        >
                        <input name='newcommentbody'
                        value={this.state.newcommentbody}
                        placeholder='Type your comment here'>
                        
                        </input>
                        <button>Comment</button>
                    </form>     
                    <div>
                        <ul className='comments_grid'>
                            {
                                this.state.comments.map((ele, i)=> <li className="card"> {ele.body} </li> )         
                            }
                        </ul>
                    </div>            
                </div>
            )

        }

        return (
            
            <div>  
                
                <div>
                    <ul className='SinglePostPage'>                    
                        <li> <h2>{this.state.postTitle}</h2><img src={this.state.postPhoto_url}></img><p>{this.state.postBody}</p> </li>                           
                    </ul>
                </div>
                <form
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    className="commentform"
                    >
                    <input name='newcommentbody'
                    value={this.state.newcommentbody}
                    placeholder='Type your comment here'>
                    
                    </input>
                    <button>Comment</button>
                </form>     
                <div>
                    <ul className='comments_grid'>
                        {
                            this.state.comments.map((ele, i)=> <li className="card"> {ele.body} </li> )         
                        }
                    </ul>
                </div>            
            </div>
        )
    }
}
