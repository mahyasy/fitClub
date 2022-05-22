import React from 'react'
import {BrowserRouter as Router,Routes ,Route,useNavigate,Navigate} from 'react-router-dom'

export const Product = (children) => {
  const isAuth = localStorage.getItem("token")
 
 return(
   <div>
     <Routes>
       <Route render={(props)=> {return isAuth ?{children}:<Navigate to="/login"></Navigate> }}></Route>
     </Routes>
   </div>
 )
 }


export default Product
