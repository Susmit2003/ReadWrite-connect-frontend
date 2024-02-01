
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import Rec from './Rec';
import '../App.css'
export default function ReadArticle() {
  const[articles, setArticles] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8000/readallarticle")
    .then((All_article)=>{
      //  console.log(All_article)
      //  function myfun(val,ind,arr){
      //   console.log(arr[ind])
       //}
       //All_article.foreach(myfun)
    })
    .catch()
  }, []);


  const handleClick = (e) => {
    localStorage.setItem('curr_id', e._id);
    Navigate('/single_article');
  }



  useEffect(() => {
    axios.get('http://localhost:8000/sportsarticle')
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
              
              <Card key={e._id} title={e.title} img={e.image} des={e.description} over={e.overview} con={e.conclusion}/>
              </div>
              </>
            )
          })
      }
      
    </div>
  )
}
