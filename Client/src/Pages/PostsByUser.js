import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


export default class PostsByUser extends React.Component{


    state = {

        posts:[]

    }


    componentDidMount(){


        var url = `http://localhost:3003/posts/user`
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
        axios.get(url)
        .then ((res)=>{

            this.setState({posts:res.data})               
        })
        .catch((error)=>{
             
        })
    }

    handleDelete = id =>{

        var url = `http://localhost:3003/posts/delete`
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
        axios.post(url, {PostID: id })
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

                    {this.state.posts.map(ele=>{
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