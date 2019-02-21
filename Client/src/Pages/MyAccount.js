import React from 'react';
import {users} from '../mockarray'
import {NavLink} from 'react-router-dom';


export default class MyAccount extends React.Component{
  
    state={
        username:'My Name', 
        password:'My Password',
        email: '@email.mock',
        _id: 64654654654,
        photo: '',
        nickname:'',
        moto: '',
    }
  
  
    handleChange = e => this.setState({[e.target.name]:e.target.value})
    handleSubmit = e => {
        e.preventDefault()
        users.push(this.state)
        localStorage.setItem("token", "token")
        this.props.isLoggedIn(true)
        this.setState({[e.target.name]:""})
        
    }
render(){


return (
<div>
    <div className='myAccountgrid'>
        <NavLink to={`/MyPosts/${this.state._id}`}> My Posts</NavLink>
        <NavLink to='/MyComments'> My Comments</NavLink>
    </div>
        <div className='myAccountgrid'>
            <div>
                <h3>Edit your account</h3>
                <form onChange = {this.handleChange}
                        onSubmit = {this.handleSubmit} 
                        className="register_form">
                    <input name ='username' 
                            value ={this.state.username} 
                            placeholder="Your Name">

                    </input>
                    <input name ='password' 
                            value ={this.state.password} 
                            placeholder="Your password"
                            >
                            
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
                    <button>TO BE HIDDEN</button>
                </form>
            </div>
            <div>
                <h3>Edit your privacy</h3>
                <form onChange = {this.handleChange}
                        onSubmit = {this.handleSubmit} 
                        className="register_form">
                    <input name ='username' 
                            value ={this.state.username} 
                            placeholder="Your Name">

                    </input>
                    <input name ='password' 
                            value ={this.state.password} 
                            placeholder="Your password"
                            >
                            
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
                    <button>TO BE HIDDEN</button>
                </form>
            </div>
        </div>
</div>
)


}
}