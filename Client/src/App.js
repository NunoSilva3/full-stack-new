import React, { Component } from 'react';
import Register from './Register'
import Login from './Login'
import SecretComp from './SecretComp'
import NavBarNPM from 'reactjs-navigation'
import {
  BrowserRouter as Router,
	Route
} from 'react-router-dom'
import PostsByCatLogged from './Pages/PostsByCatLogged';
import PostsByCat from './Pages/PostsByCat';
import Logout from './Logout';
import HomePage  from './Pages/HomePage';
import Categories  from './Pages/Categories';
import PostsPage  from './Pages/Posts';
import MyAccount from './Pages/MyAccount';
import HomePageLogged from './Pages/HomePageLogged';
import CategoriesLogged from './Pages/CategoriesLogged';
import PostsLogged from './Pages/PostsLogged';
import SinglePostPage from './Pages/SinglePostPage';
import CreatePost from './Pages/CreatePost';
import PostsByUser from './Pages/PostsByUser';
import CreateCategory from './Pages/CreateCategory';
import CategoriesByUser from './Pages/CatByUser'
import CommentsByUser from './Pages/CommentsByUser'




class App extends Component {

  state = {
    isLoggedIn:false
  }
  componentDidMount(){
      var token = localStorage.getItem('authToken')
      token ? this.setState({isLoggedIn:true}) : null
  }
  isLoggedIn = (bool) => {
      this.setState({isLoggedIn:bool},()=>{
      })
  }
  render() {
    let { isLoggedIn } = this.state 
    return (
      <Router>
      <div>
      <NavBarNPM 
          logo = 'https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SY355_.jpg'
          pages = {isLoggedIn ? ['/','Categories','Search Posts','','My Account', 'logout'] : ['/','Categories','Search Posts','register', 'login']}
        />
        <Route 
          exact path =  '/'
          render = {
            () =>{
              if(isLoggedIn){
                return  <HomePageLogged/>
              }else return <HomePage/>
             
            }
          } 
        />
        <Route 
          path =  '/Categories'
           render = {
              () =>{
                if(isLoggedIn){
                  return  <CategoriesLogged/>
                }else return <Categories/>
               
              }
            }
        />
         <Route 
          path =  '/posts/:_id'
           render = {
              (props) =>{
                if(isLoggedIn){
                  return  <PostsByCatLogged {...props}/>
                }else return <PostsByCat {...props}/>
               
              }
            }
        /> 
        <Route 
          path =  '/Search Posts'
           render = {
              () =>{
                if(isLoggedIn){
                  return  <PostsLogged/>
                }else return <PostsPage/>
               
              }
            }
        />
        <Route 
          path =  '/post/:_id'
           component = {SinglePostPage}
        />
        <Route 
          path =  '/MyPosts'
           component = {PostsByUser}
        />
        <Route 
          path =  '/MyCategories'
           component = {CategoriesByUser}
        />
        <Route 
          path =  '/MyComments'
           component = {CommentsByUser}
        />
        <Route 
          path =  '/login' 
          render = {
            () =>(
              <Login isLoggedIn = {this.isLoggedIn} />
            )
          } 
        />
        <Route 
          path =  '/My Account'
          render = {
            (props) =>(
              <MyAccount {...props} isLoggedIn = {this.isLoggedIn} />
            )
          } 
        />
        <Route 
          path =  '/logout'
          render = {
            () =>(
              <Logout isLoggedIn = {this.isLoggedIn} />
            )
          } 
        />
        <Route 
          path =  '/register' 
          component = {Register}
        />     
        <Route 
          path =  '/CreatePost/:categoryID' 
          component = {CreatePost}
        />  
        <Route 
          path =  '/CreateCategory' 
          component = {CreateCategory}
        />  
      </div>
      </Router>
    );
  }
}

export default App;
