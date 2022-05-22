import React from  "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";



class User extends React.Component{
     state={
          karbar:[],
          isLoading :true
     }
      
     
     componentDidMount = async()=>{
          const response = await  axios.get("https://reqres.in/api/users");
          console.log(response)
      setTimeout(()=>{


          this.setState({karbar:response.data.data,isLoading:false})

      },3000)
     }
     render(){
          return(
               
               <div>
                     <button className="btnU" onClick={this.handlecreate}>add your info+</button>
                 

                        
                    <div className="row">
                         {
                              this.state.isLoading ?(
                                   <Loading></Loading>

                              ):(
                                   this.state.karbar.map((k)=>{
                                        return(
                                        
                                             <div className="col-4 text-center p-5">
                                                  <img src={k.avatar} style={{width:"100px",borderRadius:"50%"}}></img>
                                         <Link to={`/New/${k.id}`}>
                                           <h6>{k.first_name}{k.last_name}</h6>
                                           </Link>
                                           
                                                  <p>{k.email}</p>
                                                  <div className="row">
                                                       <div className="col-6">
                                                            <button className="btn-sm btn-warning" onClick={()=>this.handleUpdate(k)}>update</button>
                                                           
                                                       </div>
                                                       <div className="col-6">
                                                            <button className="btn-sm btn-danger" onClick={()=>this.handleDelete(k)}>delete</button>
          
                                                       </div>
                                                  </div>
                                             </div>
                                        )
                                   })
                              )
                         }

                    </div>
                    
                    







               </div>
          )
     }
     handlecreate = async()=>{
          const newUser={
               first_name:"mahya",
               last_name:"seyedyousefi",
               email:'mahyayousefi@yahoo.com'
          }
          const response = await axios.post("https://reqres.in/api/users",newUser);
          this.setState({karbar:[...this.state.karbar,newUser]})

     }
   handleUpdate = async(u)=>{
        u.first_name="updated";
        const response= await axios.put(`https://reqres.in/api/users/${u.id}`);
         const kar  = [...this.state.karbar];
         const index  = kar.indexOf(u);
         kar[index]= {...u};
         this.setState({karbar:kar})



   }
    handleDelete = async(u)=>{
         const response = await axios.delete(`https://reqres.in/api/users/${u.id}`);
         const newKarbar = this.state.karbar.filter((l)=>
         l.id !== u.id);
        this.setState({karbar : newKarbar})

    }



}
export default User