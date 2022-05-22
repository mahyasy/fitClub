import axios from "axios";
import React from "react";
import * as yup from "yup";





class Login extends React.Component{
   

state={
     account:{
          email:"",
          password:""
     },
     errors:[],
     sending:false,
}





schema = yup.object().shape({
     email:yup.string().email("the format must be email").required('fill the gap'),
     password:yup.string().min(4,'the password must be more than 4 charachter')
})
val = async()=>{
     try{
     const result = await this.schema.validate(this.state.account,{abortEarly:false});
     return result;
     }catch(error){
          console.log(error.errors);
          this.setState({errors:error.errors})

     }
}


     handdleSubmit = async(e)=>{
          e.preventDefault();
          const result = await this.val();
          console.log(result);
          if(result){
               try {
                    this.setState({sending:true})
                    const response = await axios.post('https://reqres.in/api/login',result);
                 console.log(response.data.token)
                  localStorage.setItem('token',response.data.token);
                  window.location ="/dash"
                    this.setState({sending:false})
                    console.log(response)
               } catch (error) {
                    this.setState({sending:false})
                    this.setState({errors:['the emial or password is not correct']})
                    
               }
          }
           

     }
     handleChange = async(e)=>{
          const input = e.currentTarget;
          const account ={...this.state.account};
          account[input.name]= input.value;
          this.setState({account})

     }
     render(){
      
          return(
               <div>
                    {this.state.errors.length !==0 &&(
                         <div className="alert alert-danger">
                              <ul>
                                   {this.state.errors.map((e,i)=><li key={i}>{e}</li>)}
                              </ul>
                         </div>
                    )}
                    <form onSubmit={this.handdleSubmit}>
                         <div className="mb-3">
                              <label htmlFor="email">Email:</label>
                              <input   onChange={this.handleChange} value={this.state.account.email} name="email" className="form-control" id="email" type="text"></input>


                         </div>
                         <div className="mb-3">
                              <label htmlFor="password">password:</label>
                              <input onChange={this.handleChange} value={this.state.account.password} name="password"  className="form-control" id="password" type="text"></input>

                         </div>
                         <button disabled={this.state.sending} className="btnU"  >Login</button>
                        


                    </form>
               </div>
          )
     }
}
export default Login