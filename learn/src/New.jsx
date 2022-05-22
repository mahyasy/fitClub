import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";


const New = (props) =>{
const [user,setUser]=useState({})
  const {id}= useParams();
  let nav = useNavigate()

useEffect(()=>{
  async function fetchData(){
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    setUser(response.data.data)
  }
  fetchData();
}, []);

console.log(id)

  return(
    <div >
   
   <img src={user.avatar} style={{width:"100px",borderRadius:"50%"}}></img>
                              
                                 <h6>{user.first_name}{user.last_name}</h6>
                                 
                                 
                                        <p>{user.email}</p> 
                                        <button className="btnU" onClick={()=>nav("/home")}>back to home</button>
     

    </div>
  )
}
export default New