
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Card from './Card';
import Rec from './Rec';
import '../App.css'
export default function ReadArticle() {
const[articles, setArticles] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8000/allpolarticle')
    .then((data) => {
      setArticles([...data.data.data])
    })
  }, [])

  return (
    
    <div id="rec_art_main_div">
      {
          articles.map((e) =>{
            return(
              <>
              <div >

              <Card key={e._id} title={e.title} img={e.image} over={e.over} />
              </div>
              
              </>
            )
          })
      }
      
    </div>
  )
}
