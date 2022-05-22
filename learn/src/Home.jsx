import React from 'react'
import athlete from "./images/athlete.jpg"
import { Icon } from '@iconify/react';
import Offer from './Offer';

export const Home = () => {


  
  return (

<div>
<div class="container">
  <div class="row">
    <div class="col">
    <h2><strong>Hey!</strong></h2>
      <h2><strong>I'M EMMA</strong></h2>
      <p>"if it doesn't challange you,it wont't change you."
        it's my Slogan and I will help you be the best 
        can be . I'm Emma jones. I've been a fitness
              trainer since 2010. fitness,Health and Lifestyle Influencer
      </p>
      <div className='row'>
        <div id='app1' className='col'>
       <p><Icon icon="logos:google-play-icon" />  Get it on Google Play</p>
      
        </div>
      <div id='app2' className='col'>
       
    <p><i class="bi bi-apple"></i>   Get it in App Store</p>

      </div>
      </div>
     
    </div>
    <div class="col">
    <img src={athlete} width="500px" height="300px"></img>
    
   
  </div>
  <Offer></Offer>
</div>
</div>





   
      
     
   
    </div>
  )
}
export default Home
