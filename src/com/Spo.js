

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import Card3 from './Card3'

export default function ReadArticle() {
  const [articles, setArticles] = useState([]);
  const [rightarticles, setrightArticles] = useState([]);
  const Navigate = useNavigate();



  useEffect(() => {
    axios.get('http://localhost:8000/sportsarticle')
      .then((data) => {
        console.log(data.data.data[0].author.username)
        setArticles([...data.data.data]);
      })
      .catch((error) => {
        console.error('Error fetching sports articles:', error);
      });
      
  }, []);
    
  useEffect(() => {
    axios.get('http://localhost:8000/sportsarticleRight')
      .then((single) => {
        
        setrightArticles(single.data.single);
      })
      .catch((error) => {
        console.error('Error fetching sports articles:', error);
      });
  }, []);
  const handleClick = (e) => {
    localStorage.setItem('curr_id', e._id);
    Navigate('/single_article');
  };

  // Split articles into two arrays: one for the single article and one for the rest
  const singleArticle = articles.slice(0, 1);
  const multipleArticles = articles.slice(0, 10);

  useEffect(() => {
    // console.log('article is')
    // console.log(articles)
  }, [articles])


  return (
    <>
    <div>Sport Article</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 lg:px-12 py-6">
      {/* Right Part: Single Article */}
      <div className="h-full w-full">
        {rightarticles.map((e) => (
          <div className='h-full' key={e._id} onClick={() => handleClick(e)}>
            <Card3 title={e.title} img={e.image} des={e.description} over={e.overview} con={e.conclusion} author={e.author.username}  like={e && e.likes.length}/>
          </div>
        ))}
      </div>

      {/* Left Part: Multiple Articles */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-6">
          {/* {multipleArticles.map((e) => (
            
            // <div key={e._id} onClick={() => handleClick(e)}>
            //   <Card title={e.title} img={e.image} des={e.description} over={e.overview} con={e.conclusion} />
            // </div>
            
            console.log("I am ", e)
          
          ))} */}
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          {multipleArticles.slice(0,2).map((e) => (
            <div key={e._id} onClick={() => handleClick(e)}>

              <Card title={e.title} img={e.image} des={e.description} over={e.overview} con={e.conclusion} date = {e.time} author={e.author.username}  like={e && e.likes.length}/>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          {multipleArticles.slice(2, 4).map((e) => (
            <div key={e._id} onClick={() => handleClick(e)}>
              <Card title={e.title} img={e.image} des={e.description} over={e.overview} con={e.conclusion}date = {e.time} author={e.author.username} like={e && e.likes.length} />
            </div>
          ))}
        
        </div>
      </div>
    </div>
    </>
  );
}

