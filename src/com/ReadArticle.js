
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyCard from './Card';
import Rec from './Rec';
import Spo from './Spo';
import '../App.css'
import Pol from './Pol';
import Edu from './Edu';
import Nav from './Nav';
import Home_sec1 from './Home_sec1';
import SearchState from '../context/SearchState';
import { SearchContext } from '../context/SearchState';
import { useContext } from 'react';
export default function ReadArticle() {
 
  
  const {state} = useContext(SearchContext);


  const[articles, setArticles] = useState([]);
  const[currArticls, setCurrArticles] = useState([]);
  const[curr, setCurr] = useState(state);

 useEffect(() => {
  console.log(state)
  setCurr(state)
 }, [state])

 useEffect(() => {
  axios.get("http://localhost:8000/readallarticle")
  .then((data)=>{
      console.log(typeof(data.data.data))
      console.log(data.data.data)
      setArticles([...data.data.data])
  })
  .catch()
}, []);

  const filterData = () => {
    const arr = articles.filter((e) => {
      return e.title.includes(state);
    })

    setCurrArticles([...arr])
  }

  useEffect(() => {
    filterData(curr);
  }, [state])

  useEffect(() => {
    console.log(currArticls.length)
  }, [currArticls.length])

  return (
  
        <div>
             <Nav/>

              {
                !currArticls.length&&<div>

                <Home_sec1/> 
               <div id="r_bar"><h2>Recent articles</h2></div>
              <Rec/>
              <div id="r_bar"><h2>sport articles</h2></div>
               <Spo/>
               <div id="r_bar"><h2>educational articles</h2></div>
               <Edu/>
               <div id="r_bar"><h2>political articles</h2></div>
               <Pol/>
          
              </div>
              }
              {
                currArticls.length&&currArticls.map((e) => {
                  return(<div>
                      <MyCard title={e.title} des ={e.description} img={e.image}/>

                  </div>)
                })
              }
              
    </div>
  )
}
