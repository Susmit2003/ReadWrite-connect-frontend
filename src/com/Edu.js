
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import '../App.css';

export default function ReadArticle() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/eduarticle')
      .then((data) => {
        setArticles([...data.data.data]);
      })
      .catch(err => console.log(err));
  }, []);

  const handleClick = (e) => {
    localStorage.setItem('curr_id', e._id);
    navigate('/single_article');
  }

  const responsive = {
    superLargeDesktop: {
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
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-2xl font-bold mb-4">Educational Articles</h1>
      <Carousel responsive={responsive} className="w-full">
        {articles.map((e) => (
          <div 
            key={e._id} 
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleClick(e)}
          >
            <Card 
              title={e.title} 
              img={e.image} 
              des={e.description} 
              over={e.overview} 
              con={e.conclusion} 
              date = {e.time}
              author={e.author.username} 
              like={e && e.likes.length}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

