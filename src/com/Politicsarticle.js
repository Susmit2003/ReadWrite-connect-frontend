
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';

export default function ReadArticle() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/allpolarticle')
      .then((response) => {
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  const handleClick = (article) => {
    localStorage.setItem('curr_id', article._id);
    navigate('/single_article');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <div key={article._id} onClick={() => handleClick(article)}>
            <Card title={article.title} img={article.image} over={article.over} />
          </div>
        ))}
      </div>
    </div>
  );
}
