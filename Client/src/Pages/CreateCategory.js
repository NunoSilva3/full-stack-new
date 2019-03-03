import React from 'react';
import axios from 'axios';
import UploadImages from '../UploadImages';


export default class CreatePost extends React.Component{

    state = {
        name: String,
        photoUrl: String,
        confirmation: '',
}

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            photoUrl:'',
        })   
        }


    handleSubmit = e => { 
        e.preventDefault()
        var url = `http://localhost:3003/categories/create`
        debugger
        console.log(this.state)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
        axios.post(url, 
            {
                name: this.state.name,
                photoUrl: this.state.photoUrl,
        }
            )
        .then ((res)=>{
            debugger
            console.log(res.data)
            this.setState({confirmation:res.data.name})

        })
        .catch((error)=>{
            debugger
            console.log(error)

        })

        }

        getData = e =>{
            console.log('PROOOOOOPS=======>', e)
            this.setState({photoUrl:e})

        }


    render(){

        return (
            <div>
            <form className='CreatePost'
                onChange = {this.handleChange}
                onSubmit = {this.handleSubmit} 
                >
                <input 
                    name ='name' 
                    value ={this.state.name} 
                    placeholder="Create a new category!"
                />
                <button>Create!</button>              
            </form>
            <UploadImages getData={this.getData}/>
            <alert>{`Category ${this.state.confirmation} created`}</alert>
            </div>
        )

    }
}