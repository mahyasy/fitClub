import React from "react";
import { NavLink } from "react-router-dom";


const Navbar =(props)=>{
     return(
          <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
   
      <div className="navbar-nav" >
      <a class="navbar-brand" href="#" id="brand">EMMAfits.</a>
           <NavLink style={({isActive})=>{
                return {color: isActive ? 'red':'black'}
           }}   to="/home" className="nav-link active">Home</NavLink>
            <NavLink style={({isActive})=>{
                 return {color: isActive ? "red": "black"}
            }}   to="/User" className="nav-link">Users</NavLink>


{
!props.user ? (
     <>
       <NavLink  style={({isActive})=>{
          return{color:isActive ? "red":"black"}}}  to="/login" className="nav-link">Login</NavLink>
          <NavLink style={({isActive})=>{
          return{color:isActive ? "red":"black"}}} to="/register" className="nav-link">Register</NavLink>
     </>

):(
     <>
       <NavLink  style={({isActive})=>{
          return{color:isActive ? "red":"black"}}}  to="/dash" className="nav-link">Dashboard</NavLink>
          <NavLink style={({isActive})=>{
          return{color:isActive ? "red":"black"}}} to="/logout" className="nav-link">LogOut</NavLink>
     </>

)
}

          
       
      </div>
    </div>
 
</nav>

          </div>
     )
}
export default Navbar