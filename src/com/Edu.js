
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Card from './Card';
import Rec from './Rec';
import '../App.css'
export default function ReadArticle() {

  const Navigate = useNavigate();

  const[articles, setArticles] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/eduarticle')
    .then((data) => {
      setArticles([...data.data.data])
    })
  }, [])


  const handleClick = (e) => {
    localStorage.setItem('curr_id', e._id);
    Navigate('/single_article');
  }

  



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };












  return (
    
    <div id="spo_art_main_div">
      {
          articles.map((e) =>{
            return(
              <>
              <div onClick={() => handleClick(e)}>
              <Carousel responsive={responsive}>
              <Card key={e._id} title={e.title} img={e.image}/>
            </Carousel>
            </div>
              </>
            )
          })
      }
      
    </div>
  )
}
