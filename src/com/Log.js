// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// import '../App.css';
// import {route} from "react-router-dom"
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Log() {
//     const[email, setEmail] = useState("");
//     const[pass, setPass] = useState("")
//     const[type,settype]=useState("")

//     const navigate = useNavigate();

//     useEffect(() => {
//         console.log(email);
//         console.log(pass)
//     }, [email, pass])

//     const handleSubmit = () => {
//    console.log(type)
//    console.log("yuy")
    
//         axios.post("http://localhost:8000/login" ,{email:email, password: pass,userType:'r'})
//         .then((data) => {
//           console.log("YYe")
//             console.log(data)
//             localStorage.setItem("email", data.data.data.email)
//             localStorage.setItem("password", data.data.data.password)
//             localStorage.setItem("id", data.data.data._id)
//             var x=data.data.type;
//             console.log("aa")
//             console.log(data.data.data._id0)

//           if(x=='r'){
//              navigate('/readarticle')
//             }

           
         




//         }) 
//         .catch((err) => {
//           console.log(err)
//         })
        
//     }
  
//     const handleChange  = (e) => {
//       settype(e.target.value)
//       console.log(type)
//     }

//   return (
//     <div>
//         <div className="parent_div_of_log">
//         <div className="log">
//            <div>
//             <input type="email" name="em" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
//             </div> 
//             <br></br>
//            <div> <input type="password" name="pass" placeholder="Enter your password" value={pass} onChange={(e) => setPass(e.target.value)}/>
//            </div> 
           
//           <Button id="b" onClick={handleSubmit}>Login</Button>

//             <div class="signup">
//                  not a member?<Link to="/signup">Signup</Link> 
//             </div>
//             </div>
//             </div>
            
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function Log() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log(email);
    console.log(pass);
  }, [email, pass]);

  const handleSubmit = () => {
    console.log(type);
    axios.post("http://localhost:8000/login", { email, password: pass, userType: 'r' })
      .then((data) => {
        console.log(data)
        localStorage.setItem("email", data.data.data.email);
        localStorage.setItem("password", data.data.data.password);
        localStorage.setItem("id", data.data.data._id);
        localStorage.setItem("currentLogUser", data.data.data.username);

        var x = data.data.type;

          navigate('/readarticle');
      
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleChange = (e) => {
    setType(e.target.value);
    console.log(type);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <input
            type="email"
            name="em"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="pass"
            placeholder="Enter your password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />

        </div>

        
        <Button
          id="b"
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </Button>
        <div className="text-center mt-4">
          <span>Not a member? </span>
          <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link>
        </div>
      </div>
    </div>
  );
}

