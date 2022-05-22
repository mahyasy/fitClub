import React from 'react';

import { Icon } from '@iconify/react';


const Offer = () => {
  return (
    <div>
         <div className='row'>
              <div className='col-8'>
                   <div className='container1'>
                  <div className='row'>
                       <div className='col'>
                        
                      <div className='icon'> <Icon icon="mdi:dumbbell" /></div>
                    <h6> Private Section</h6> 
                    <p>my create personal training program where all
                         bodies can move
                    </p>
                       </div>
                       <div className='col'>
                     <div className='icon'><i class="bi bi-stopwatch"></i></div>
                           <h6>Group class</h6> 
                           <p>we offer an array of different groupe fitness
                                class type
                           </p>

                       </div>
                       <div className='col'>
                     <div className='icon'><Icon icon="mdi:pasta" /></div>  
                          <h6>Program and Diet</h6>  
                          <p>you need to begin thinking of the 
                               amount of protein
                          </p>

                       </div>

                  </div>
                   </div>
              </div>
              <div className='col-4'>
                   <h4>training Programs we offer you</h4>
                   <p>starting a fitness routine
                        can be intimidating, but it helps to have 
                        idea of what to expect before join any class
                   </p>

              </div>

         </div>
    </div>
  )
}

export default Offer