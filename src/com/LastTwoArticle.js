
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Card2 from './Card2';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';

export default function ReadArticle() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const handleClick = (e) => {
    localStorage.setItem('curr_id', e._id);
    navigate('/single_article');
  }

  useEffect(() => {
    axios.get('http://localhost:8000/lastTwoArticles')
      .then((data) => {
        setArticles(data.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
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
    <Carousel 
      ref={carouselRef}
      responsive={responsive} 
      infinite={true}
    >
      {articles.map((e) => (
        <div key={e._id} id="sec1" onClick={() => handleClick(e)}>
          <Card2 title={e.title} img={e.image} des={e.description} over={e.overview} con={e.conclusion} />
        </div>
      ))}
    </Carousel>
  );
}


