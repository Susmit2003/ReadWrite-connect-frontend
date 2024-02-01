import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';


export default function Show_clicked_article() {
    const[articles, setArticles] = useState();
    useEffect(() => {
        const id = localStorage.getItem("curr_id");
         axios.get(`http://localhost:8000/get_singlearticle/${id}`)
        .then((data) => {
            console.log(data)
            setArticles(data.data[0])
        })
        .catch(err=>console.log(err))
    },[])

    // useEffect(() => {
    //     if(articles[0])console.log(articles[0]._id)
    // },[articles])

  return (
    <div id="showArticleMainDiv">
       {/* <h1>{articles&&articles[0].title}</h1> */}
       
       
       <div id="singleArticleImg"><p><img src={articles&&articles.image}></img></p></div>
       <div><h1>{articles&&articles.title}</h1></div>
       <div id="singleArticleOver"><p>{articles&&articles.overview}</p></div>
       <div id="singleArticleDes"><p>{articles&&articles.description}</p></div>
       <div id="singleArticleCon"><p>{articles&&articles.conclusion}</p></div>
       
    </div>
  )
}
