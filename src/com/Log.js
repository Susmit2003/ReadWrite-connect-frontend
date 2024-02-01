import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import {route} from "react-router-dom"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Log() {
    const[email, setEmail] = useState("");
    const[pass, setPass] = useState("")
    const[type,settype]=useState("")

    const navigate = useNavigate();

    useEffect(() => {
        console.log(email);
        console.log(pass)
    }, [email, pass])

    const handleSubmit = () => {
   console.log(type)
   console.log("yuy")
    
        axios.post("http://localhost:8000/login" ,{email:email, password: pass,userType:type})
        .then((data) => {
          console.log("YYe")
            console.log(data)
            localStorage.setItem("email", data.data.email)
            localStorage.setItem("password", data.data.password)
            localStorage.setItem("id", data.data._id)
            var x=data.data.type;
            console.log("aa")
            console.log(x)

          if(x=='r'){
             navigate('/readarticle')
            }

           if(x=='w'){
           navigate('/writearticle')
          }
         




        }) 
        .catch((err) => {
          console.log(err)
        })
        
    }
  
    const handleChange  = (e) => {
      settype(e.target.value)
      console.log(type)
    }

  return (
    <div>
        <div className="parent_div_of_log">
        <div className="log">
           <div>
            <input type="email" name="em" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </div> 
            <br></br>
           <div> <input type="password" name="pass" placeholder="Enter your password" value={pass} onChange={(e) => setPass(e.target.value)}/>
           </div> 
           <br></br>
           <select onChange={(e) => handleChange(e)}> 
           <option value="">select</option>
           <option value="w">as a writer</option>
            <option value="r">as a reader</option>
           </select> 
           <br></br>
          <Button id="b" onClick={handleSubmit}>Login</Button>

            <div class="signup">
                 not a member?<Link to="/signup">Signup</Link> 
            </div>
            </div>
            </div>
            
    </div>
  )
}
