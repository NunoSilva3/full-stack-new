import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import UploadImages from '../UploadImages';


export default class MyAccount extends React.Component{
  
    state={
        username:'', 
        email: '',
        profilePhoto: '',
        nickname:'',
        moto: '',
    }


    componentDidMount(){
        
        var url = `http://localhost:3003/users/user`
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
        axios.get(url)
        .then ((res)=>{
          debugger
            this.setState({
                username:res.data.username, 
                email: res.data.email,
                profilePhoto: res.data.profilePhoto,
                nickname: res.data.nickname,
                moto: res.data.moto,
            })              
        })
        .catch((error)=>{
            debugger
             console.log(error)
        })
    }

    handleChange = e => this.setState({[e.target.name]:e.target.value})
    handleSubmit = e => {
     e.preventDefault()
     var url = `http://localhost:3003/users/update`
     axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
     axios.post(url, this.state)
     .then ((res)=>{
         this.setState({
            username:res.data.username, 
            email: res.data.email,
            profilePhoto: res.data.profilePhoto,
            nickname: res.data.nickname,
            moto: res.data.moto,
        })           
         })
         .catch((error)=>{
            debugger
            console.log(error)

        })
    }
    getData = e =>{
        debugger
        console.log('PROOOOOOPS=======>', e)
        this.setState({profilePhoto:e})

    }

render(){


return (
<div>
    <div className='myAccountgrid'>
        <NavLink to={`/MyPosts`}> My Posts</NavLink>
        <NavLink to={`/MyComments`}> My Comments</NavLink>
        <NavLink to='/MyCategories'> My Categories</NavLink>
    </div>
        <div className='myAccountgrid'>
                <div>
                        
                </div>
            <div>
                <h3>Edit your account</h3>
                <form onChange = {this.handleChange}
                        onSubmit = {this.handleSubmit} 
                        className="register_form">
                    <input name ='username' 
                            value ={this.state.username} 
                            placeholder="Your Username">

                    </input>
                    <input name ='email' 
                            value ={this.state.email} 
                            placeholder="Your Email">

                    </input>
                    <input name ='nickname' 
                            value ={this.state.nickname} 
                            placeholder="Your nickname">

                    </input>
                    <input name ='moto' 
                            value ={this.state.moto} 
                            placeholder="Your moto">

                    </input>
                    <img src={this.state.profilePhoto}></img>
                    <button>TO BE HIDDEN</button>
                </form>
                <UploadImages getData={this.getData}/>
            </div>
        </div>
</div>
)


}
    }