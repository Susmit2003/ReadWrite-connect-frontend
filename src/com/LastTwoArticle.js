
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card2 from './Card2';
import { useNavigate } from 'react-router-dom';
import '../App.css'
export default function ReadArticle() {
  const[articles, setArticles] = useState([]);
  const Navigate = useNavigate();
 

  const handleClick = (e) => {
    localStorage.setItem('curr_id', e._id);
    Navigate('/single_article');
  }



  useEffect(() => {
    axios.get('http://localhost:8000/lastTwoArticles')
    .then((data) => {
      setArticles([...data.data.data])
    })
  }, [])

  return (
    
    <div id="spo_art_main_div">
      {
          articles.map((e) =>{
            return(
              <>
              <div onClick={() => handleClick(e)}>
              
              <Card2 key={e._id} title={e.title} img={e.image} des={e.description} over={e.overview} con={e.conclusion}/>
              </div>
              </>
            )
          })
      }
      
    </div>
  )
}
