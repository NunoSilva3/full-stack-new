import React from 'react'

export default class Login extends React.Component {
    state = {
        username:'', 
        password:''
    }
    handleChange = e => this.setState({[e.target.name]:e.target.value})
    handleSubmit = e => {
        e.preventDefault()
        let { username , password } = this.state
        fetch('http://localhost:3003/users/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          }).then((response) => response.json())
              .then((responseJson) => {
                  
                  localStorage.setItem('authToken',JSON.stringify(responseJson.token))
                  alert('Welcome back '+ responseJson.username)
                  this.props.isLoggedIn(true)
        }).catch((e)=>{
            
        }) 
    }

    render(){
        return (
            <form 
                onChange = {this.handleChange}
                onSubmit = {this.handleSubmit} 
                className="formStyle register_form">
                <input 
                    name ='username' 
                    value ={this.state.username} 
                    placeholder="Name"
                />
                <input 
                    name ='password' 
                    value ={this.state.password} 
                    placeholder='Password'
                />
                <button>Login</button>
            </form>
        )
    }
}