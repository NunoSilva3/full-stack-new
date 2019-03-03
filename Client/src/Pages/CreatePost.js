import React from 'react';
import axios from 'axios';
import UploadImages from '../UploadImages';


export default class CreatePost extends React.Component{

    state = {
		title:'',
		body:'',
		categoryID:'',
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
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
        axios.post(url, 
            {
                title: this.state.title,
                body: this.state.body,
                categoryID: this.state.categoryID,
                photo_url: this.state.photo_url,
        }
            )
        .then ((res)=>{
            debugger
            if(res.data.error){
                this.setState({confirmation:"something went wrong."})       
            }
            else{
                this.setState({confirmation:"Post Created!"})    
            }


        })
        .catch((error)=>{
            debugger
            console.log(error)
            this.setState({confirmation:"something went wrong..."})


        })

        }

        getData = e =>{
            console.log('PROOOOOOPS=======>', e)
            this.setState({photo_url:e})

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
            <UploadImages getData={this.getData}/>
            <p>{this.state.confirmation}</p>
            </div>
        )

    }
}