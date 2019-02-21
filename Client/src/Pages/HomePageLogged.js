import React, { Component } from 'react';
import { categories } from '../mockarray';
import {NavLink} from 'react-router-dom';
import axios from 'axios'

class HomePage extends Component {
  state = {
    index : 0,
    categories : []
  }

  componentDidMount(){
            var url = `http://localhost:3003/categories/showall`
            axios.get(url)
            .then ((res)=>{
              
                this.setState({categories:res.data})               
            })
            .catch((error)=>{
                 
            })
  }
  nextImage = ( ) => {
    
    let { index, categories } = this.state;
    if(index < categories.length-1){
      index++
      this.setState({index})      
    }

  }
  prevImage = ( ) => {
    let { index } = this.state;
    if(index > 0){
      index--
      this.setState({index})
    }
  }

  render() {
    let { index , categories} = this.state, { prevImage, nextImage} = this;
    if(categories.length > 0){
      return (
        <div>
          <h1 id="HomeCatName">{categories[index].name}</h1>
        <div className='homepagepic'>
          <span><i onClick={prevImage} className="fas fa-chevron-left fa-3x"></i></span>
          <NavLink to={`/posts/${categories[index]._id}`}><img src = {categories[index].photoUrl}/> </NavLink>
          <span><i onClick={nextImage} className="fas fa-chevron-right fa-3x"></i></span>
        </div>
        </div>
      );
    }
    return <h1>IS LOADING!</h1>
  }
}
export default HomePage;