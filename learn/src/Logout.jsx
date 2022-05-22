
import { useEffect } from 'react'

const Logout = () => {
useEffect(()=>{
     localStorage.removeItem("token");
     window.location="/home"
}


)
  return null;
}

export default Logout