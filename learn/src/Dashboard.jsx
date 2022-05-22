import React from 'react'
import { NavLink } from 'react-router-dom';
import diet from "./images/diet.jpg";
import group from "./images/group.jpg"

const Dashboard = () => {

  return (
    <div>
<NavLink to="/classes" >
    <div className='row mt-4'>
      <div className='test'>
   <img src={group} ></img>
    <span className='overly'>group classes</span>
    
  </div>
    </div>
    </NavLink>
<NavLink to="/diet">
    <div className='row mt-4'>
    <div className='test'>
   <img src={diet}  ></img>
    <span className='overly'>Diet</span>
    
  </div>
    </div>
    </NavLink>
    
 

    </div>
  )
}

export default Dashboard