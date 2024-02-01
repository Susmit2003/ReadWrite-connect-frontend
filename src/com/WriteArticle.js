

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { editContext } from '../context/CurrentEditState';
import { useContext } from 'react';
import { Editor } from "@tinymce/tinymce-react";

export default function WriteArticle(props) {

    const[title, setTitle] = useState("");
    const[over, setOver] = useState("")
    const[des,setDes]=useState("")
    const[con,setCon]=useState("")
    const[image,setImage]=useState("")
    const[type,settype]=useState("")

    const { state, setText } = useContext(editContext);

    useEffect(() => {
      setTitle(state.title)
      setOver(state.overView)
      setImage(state.image)
    }, [state])

  
    
    // useEffect(() => {
    //   if(image) {
    //     setImage(img);
    //   }
    //   if(title) {
    //     setTitle(ttle)
    //   }
    // })

    function handleArticle(){

        if(props.id) {
          console.log("id  is ")
          console.log(props.id)
          axios.put(`http://localhost:8000/updateArticle/${props.id}` ,{image:image,title:title, over:over,des:des,con:con,type:type,id:localStorage.getItem("curr_id")})
        .then((re) => console.log(re))
        .catch((err) => {
          console.log(err)
        })

        }
      
else {
  axios.post("http://localhost:8000/article" ,{image:image,title:title, over:over,des:des,con:con,type:type,id:localStorage.getItem("curr_id")})
        .then((re) => console.log(re));

}
        
    }
    const handleChange  = (e) => {
      settype(e.target.value)
      console.log(type)
    }
   //convert title img to string
   function convToBase64(e){
       var reader=new FileReader()
       reader.readAsDataURL(e.target.files[0])
       reader.onload=()=>{
        console.log(reader.result)
        setImage(reader.result)
       }
       
   } 

  return (
    <div id="write_article">
      
       <div >
        <div id="title">
      
      <input type="text" placeholder='Title' name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input><br></br>
      
      {image==""||image==null?"":<img width={100} height={100} src={image}/>}
      
      </div>
      <div id="title_img">
        <input required="required" accept='image/*' type='file'onChange={convToBase64}/>
      </div>
      
      <input required="required" type="text" placeholder='overview' name="over" id="over" value={over} onChange={(e)=>setOver(e.target.value)}></input><br></br>


      <textarea required="required" placeholder="description" name="des" id="des"value={des} onChange={(e)=>setDes(e.target.value)} ></textarea><br></br>

      <input required="required" type="text" placeholder='conclusion' name="con" id="con" value={con} onChange={(e)=>setCon(e.target.value)}></input><br></br>
      
      <select onChange={(e) => handleChange(e)}> 
           <option value="">select</option>
           <option value="spo">sport</option>
            <option value="pol">politics</option>
            <option value="edu">educational</option>
           </select> 
           <br></br>

      <button id="btn" onClick={handleArticle}>Submit</button>
      
      </div>
      
    
    </div>
  )
}


