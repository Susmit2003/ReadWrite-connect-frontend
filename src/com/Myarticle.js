import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentEditContext from '../context/CurrentEditState';
import { useContext } from 'react';
import { editContext } from '../context/CurrentEditState';


export default function Myarticle({id, setEdit, editState, editSet, image, desc, title, overview, conclusion, type}) {

  const { state, setText } = useContext(editContext);


  const editArticle = (e) => {
    console.log(state)
    console.log(id)

    setEdit(id)

    setText({
      id, image, desc, title, overview, conclusion, type
    })

    editSet(!editState)
  }

  return (
    <div id="articleBox">
      <div id="articlePic">
      <img src={image}></img>
      </div>
      <div  id="articleContent"> {desc}</div>
       <div id='buttonSection'>
        <div>
            <Button onClick={(e) => editArticle(e)}>Edit</Button>

        </div>
        <div>
             <Button>Delete</Button>
        </div>
  
       </div>
    
    
    </div>
  )
}
