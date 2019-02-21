import React from 'react';
import { posts } from '../mockarray';
import axios from 'axios';
import UploadImages from '../UploadImages';


export default class CreatePost extends React.Component{

    state = {
		title:'',
		body:'',
		categoryID:'',
		userID:'',
        photo_url:'',
        confirmation:'',
}

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            categoryID: this.props.match.params.categoryID,
            userID:'',
            photo_url:'',
        })   
        }


    handleSubmit = e => { 
        e.preventDefault()
        var url = `http://localhost:3003/posts/create`
        axios.post(url, 
            {
                title: this.state.title,
                body: this.state.body,
                categoryID: this.state.categoryID,
                userID: this.state.userID,
                photo_url: this.state.photo_url,
        }
            )
        .then ((res)=>{
            
            this.setState({confirmation:res.data.newPost.title})

        })
        .catch((error)=>{
            console.log(error)

        })

        }


    render(){

        return (
            <div>
            <form className='CreatePost'
                onChange = {this.handleChange}
                onSubmit = {this.handleSubmit} 
                >
                <input 
                    name ='title' 
                    value ={this.state.title} 
                    placeholder="Post Title"
                />
                <input 
                    name ='body' 
                    value ={this.state.body} 
                    placeholder="Type your post here!"
                />
                <button>Create!</button>
            </form>
            <UploadImages/>
            <alert>{`Post ${this.state.confirmation} created`}</alert>
            </div>
        )

    }
}