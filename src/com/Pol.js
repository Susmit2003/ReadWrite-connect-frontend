
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import '../App.css';

export default function ReadArticle() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/readallarticle")
      .then((All_article) => {
        // Handle data if needed
      })
      .catch(err => console.log(err));
  }, []);

  const handleClick = (e) => {
    localStorage.setItem('curr_id', e._id);
    navigate('/single_article');
  }

  useEffect(() => {
    axios.get('http://localhost:8000/polarticle')
      .then((data) => {
        setArticles([...data.data.data]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-2xl font-bold mb-4">Political Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
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
        
      </div>
    </div>
  );
}

