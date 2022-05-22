import React from 'react';
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'



const Loading = () => {

return Array(9).fill({}).map(()=>{
  
  return (
 

      <SkeletonTheme color='#F5F5F5' highlightColor='#ffffff'>
     
      <div className='col-3 text-center p-5'>

      <Skeleton  circle={true} height={80} width={80} />
    
 

      </div>


      
      </SkeletonTheme>

    
     
    
  )
  


})

}
 export default Loading;