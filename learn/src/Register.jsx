import axios from 'axios';
import React from 'react';
import * as yup from "yup";



class  Register  extends React.Component{

   state={
account:{
    first_name:'',
    last_name:'',
    password:'',
    confirmpass:'',
    email:''
},
errors:[],
sending:false,

    
   } 





  schema = yup.object().shape({
    first_name: yup.string().required("please Enter your info"),
    email: yup.string().email("the format must be email").required("please fill the gap"),
    password: yup.string().min(4,"the password must be  more than 4 charachter"),

  })

 val = async()=>{
try {
  const result = await  this.schema.validate(this.state.account,{abortEarly:false});
  return result;
  
} catch (error) {
  console.log(error.errors);
  this.setState({errors:error.errors})
  
}

  }

  handleSub= async(e)=>{
   e.preventDefault();
   const result = await this.val();
   console.log(result);
   if(result){
     try {
       this.setState({sending:true})
       const response = await axios.post('https://reqres.in/api/login',result);
       console.log(response.data.token);
       localStorage.setItem('token',response.data.token);
       window.location="/dash"
       this.setState({sending:false})
       console.log(response)
       
     } catch (error) {
       this.setState({sending:false})
       this.setState({errors:['somthing went wrong!']})
       
     }
   }
 
   }
   
   

 
  handlechange = async(e)=>{
   const input = e.currentTarget;
   const account ={...this.state.account};
   account[input.name]= input.value;
   this.setState({account})

 }


render(){

  return (
    <div>
 {this.state.errors.length !==0 &&(
                         <div className="alert alert-danger">
                              <ul>
                                   {this.state.errors.map((e,i)=><li key={i}>{e}</li>)}
                              </ul>
                         </div>
                    )}
    
    <form onSubmit={this.handleSub}>
      <div className='form-content'>
      <div className='row'>
        <div className='col-6'>
          <div className='form-group'>
          
            <input onChange={this.handlechange} value={this.state.account.first_name} id='first_name' name='first_name' placeholder=' firstName'  className='form-control' type="text" />

          </div>
     <div className='form-group'>
       <input onChange={this.handlechange} value={this.state.account.last_name}     id='last_name'  name='last_name' placeholder='lastName'  className='form-control' type="text"></input>
     </div>

        </div>
        <div className='col-6'>
          < div className='form-group'>
            <input onChange={this.handlechange}   value={this.state.account.password}   id='password'  name='password' type="text"  className='form-control' placeholder='password'></input>

          </div>
          <div className='form-group'>
          <input onChange={this.handlechange}  value={this.state.account.confirmpass}  id='confirmpass' name='confirmpass' type="text"  className='form-control' placeholder='Confirm password'></input>
         </div>
        </div>

      </div>
      <div className='row align-items-center mt-2'>
      <div className='col'>
        <input onChange={this.handlechange}  value={this.state.account.email}   id='email' name='email' type="text" className='form-control' placeholder='email'  ></input>

      </div>
</div>
<div className='row'>
<button id='btn' disabled={this.state.sending} className='mt-4 center-block'>sign up </button>
</div>
      </div>
    </form>
  </div>

  )
}
}


export default Register

