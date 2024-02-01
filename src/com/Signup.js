import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css';
import {route} from "react-router-dom"
import { Link } from 'react-router-dom';

export default function Log() {
    const[email, setEmail] = useState("");
    const[pass, setPass] = useState("")
    const[emai, setEmai] = useState("");
    const[pas, setPas] = useState("")

    useEffect(() => {
        console.log(email);
        console.log(pass)
    }, [email, pass])

    const handlesigninSubmit = () => {
      console.log(email);
        axios.post("http://localhost:8000/signup" ,{email:email, password: pass})
        .then((data) => {
            console.log(data)
            

        }) 
        .catch((err) => {
            console.log(err)})
    }
    
    const handlesigninSubmit2 = () => {
      axios.post("http://localhost:8000/signup" ,{email:emai, password: pas})
      .then((data) => {
          console.log(data)
          

      }) 
      .catch((err) => {
          console.log(err)})
  }
  
  return (
    <div>
        <div className="parent_div_of_log">
        <div className="log">
           <div><input type="email" name="em" placeholder="Enter your email" value={emai}  onChange={(e) => setEmai(e.target.value)}/></div> <br></br>
           <div> <input type="password" name="pass" placeholder="Enter your password" value={pas} onChange={(e) => setPas(e.target.value)}/></div> <br></br>
           <Link to="/readarticle"> <button id="b" onClick={handlesigninSubmit2}>Signup as a reader</button></Link> 
            
            </div>


            <div className="log">
           <div><input type="email" name="em" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)}/></div> <br></br>
           <div> <input type="password" name="pass" placeholder="Enter your password" value={pass} onChange={(e) => setPass(e.target.value)}/></div> <br></br>
           <Link to="/readarticle"> <button id="b" onClick={handlesigninSubmit}>sigup </button></Link> 
            
            </div>
            </div>
            
    </div>
  )
}
