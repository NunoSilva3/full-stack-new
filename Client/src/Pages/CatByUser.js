import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


export default class CategoriesByUser extends React.Component{


    state = {

        categories:[]

    }


    componentDidMount(){

debugger
        var url = `http://localhost:3003/categories/user`
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
        axios.get(url)
        .then ((res)=>{
            debugger
            console.log(res.data)
            this.setState({categories:res.data})               
        })
        .catch((error)=>{
             
        })
    }
    handleDelete = id =>{

        var url = `http://localhost:3003/categories/delete`
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
        axios.post(url, {categoryID: id })
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

                    {this.state.categories.map(ele=>{
                        return (
                            <div>
                        <li>{ele.name}</li>
                        <button onClick={()=>this.handleDelete(ele._id)}>Click to delete!</button>
                        </div>
                        )
                    })}

                </ul>


            </div>



        )

    }



}