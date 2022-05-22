
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import User from './User';
import Navbar from './Navbar';
import {BrowserRouter as Router ,Route,Routes,Navigate} from "react-router-dom"
import Home from './Home';
import Login from './Login';
import Error from './Error';
import New from './New';
import Dashboard from './Dashboard';
import Register from './Register';
import Logout from './Logout';
import Classes from './Classes';
import Diet from './Diet';



class  App extends React.Component{
  state ={
    user :null,
  }
  componentDidMount(){
    const token = localStorage.getItem("token");
    if(!token){
      this.setState({user :null});
      return;
    }
    const response = {
      data:{
        user:{
          name:"emma",
          email:"emma.wong@reqres.in",

        }
      }
    }
    if(!response.data.user){
      this.setState({user:null});
      return;
    }
    this.setState({user:response.data.user})

    

  };



  render() {

 
 
  return (
    <div >
      <Router>
     
      <Navbar user={this.state.user} ></Navbar>
  


      <Routes>
      
        <Route path='/New/:id' element={<New/>}></Route>
        <Route path='/home' element={<Home />}/>
        <Route path='/dash' element={<Dashboard/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/User' element={<User/>}></Route>
        <Route path='/users' element={<Navigate replace to="/User"/>}/>
        <Route path='*' element={<Error></Error>}></Route>
        <Route path='/classes' element={<Classes></Classes>}></Route>
        <Route path='/diet' element={<Diet></Diet>}/>


       
      </Routes>
 
    
      </Router>

    </div>
  
  );
  }
  }



export default App;
