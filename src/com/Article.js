
import React, {  useState } from 'react'
import axios from 'axios'

export default function Article() {
    const[a, setar] = useState("");
 
    const hSub = () => {
        axios.post("http://localhost:8000/article" ,{a:a, id:localStorage.getItem("id")})
        .then((data) => {
            console.log(data)
        
        }) 
        .catch((err) => {
            console.log(err)})
    }
    return (
    <div>
           <input type="text" name="article" value={a} placeholder="new"  onChange={(e) => setar(e.target.value)}/>
           <button id="b" type="submit"  onClick={hSub}></button> 
    </div>
  )
}
