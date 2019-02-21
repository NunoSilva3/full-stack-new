import React from 'react'

export default class Logout extends React.Component {
    componentDidMount(){
        
        localStorage.clear()
        this.props.isLoggedIn(false)
    }
    render(){
        return(
            null
        )
    }
}