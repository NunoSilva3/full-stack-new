import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


export default class CommentsByUser extends React.Component{


    state = {

        comments:[]

    }


    componentDidMount(){

        var url = `http://localhost:3003/comments/find/user`
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
        axios.get(url)
        .then ((res)=>{
            debugger

            this.setState({comments:res.data.userComments})               
        })
        .catch((error)=>{
             
        })
    }
    handleDelete = id =>{

        var url = `http://localhost:3003/comments/delete`
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
        axios.post(url, {CommentID: id })
        .then ((res)=>{
            debugger
            console.log(res.data)               
        })
        .catch((error)=>{
             
        })
    }



    render(){

        return  (

            <div>
                <ul className='FullPageGrid'>

                    {this.state.comments.map(ele=>{
                        return (
                            <div>
                        <li>{ele.body}</li>
                        <button onClick={()=>this.handleDelete(ele._id)}>Click to delete!</button>
                        </div>
                        )
                    })}

                </ul>


            </div>



        )

    }



}