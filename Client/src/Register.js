import React from 'react';
import axios from 'axios'

export default class Register extends React.Component {
    state = {
        username:'', 
        password:'',
        email:'',
        passconfirm:'',
        passvalid: true
    }
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value},()=>{
            if(this.state.password !== this.state.passconfirm){
                this.setState({passvalid:false})
            }else{
                this.setState({passvalid:true})
            }
        })
    }
    handleSubmit = e => {
        let { username , password, email, passconfirm } = this.state
        e.preventDefault()
        if(password === passconfirm){
            this.setState({passvalid:true})
        fetch('http://localhost:3003/users/register', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password,
            }),
          }).then((response) => response.json())
              .then((responseJson) => {
                  debugger
                responseJson.error ? alert(responseJson.error): localStorage.setItem('authToken',JSON.stringify(responseJson.token))
                  
                var url= 'http://localhost:3003/sendEmail'

                axios.post(url, {
                    email: this.state.email
                }

                    )
                .then ((res)=>{
                    debugger
                    console.log(res.data)             
                })
                .catch((error)=>{
                     
                })
            
        }).catch((e)=>{
            debugger
            
        })
    } else {
        this.setState({passvalid: false})
    }
    }

    render(){
        return (
            <div>
            <form className='formStyle register_form'
                onChange = {this.handleChange}
                onSubmit = {this.handleSubmit} 
                >
                <input 
                    name ='username' 
                    value ={this.state.username} 
                    placeholder="Username"
                />
                <input 
                    name ='email' 
                    value ={this.state.email} 
                    placeholder="Email"
                />
                <input 
                    name ='password' 
                    value ={this.state.password} 
                    placeholder='Password'
                />
                <input 
                    name ='passconfirm' 
                    value ={this.state.passconfirm} 
                    placeholder='Confirm password'
                />
                <button>Create Account</button>
            </form>
            <div id='react_textcenter'>
                <p>{this.state.passvalid===false ? 'Password does not match' : null}</p>
            </div>
            </div>
        )
    }
}