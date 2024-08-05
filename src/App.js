import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Form from '../src/com/Form'
import { useEffect } from 'react';
import Log from './com/Log';
import Article from './com/Article';
import Signup from './com/Signup';
import WriteArticle from './com/WriteArticle';
import Rec from './com/Rec'
import Politicsarticle from './com/Politicsarticle';
import SearchState from './context/SearchState';
import SearchContext from './context/SearchContext';
import { useContext } from 'react';
import Educational from './com/Educational';
import Sports from './com/Sports';
import Profile from './com/Profile';
import './index.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import ReadArticle from './com/ReadArticle';
import React from 'react';
import Show_clicked_article from './com/Show_clicked_article';
import Getallarticlebyaauthor from './com/Getallarticlebyaauthor';
import Card from './com/Card';


function App() {

  return (
    
    
    <BrowserRouter>
      
      <div className="App">
      
        <Routes>
        
       <Route path="/signup" element={<Signup />}/> 
          <Route path="/" element={<ReadArticle />}/> {/* Corrected Route */}

          <Route path="/readarticle" element={<ReadArticle/>} /> 
          <Route path="/single_article" element={<Show_clicked_article/>} />
          <Route path="/politicsarticle" element={<Politicsarticle/>} />
          <Route path="/educational" element={<Educational/>} />
          <Route path="/sports" element={<Sports/>} />
          <Route path="authorArth" element={<Getallarticlebyaauthor/>} />
          
          <Route path="/profile" element={<Profile/>}/>

          
          <Route path="/writearticle" element={<WriteArticle/>} />
          <Route path="/recent" element={<Rec/>} />
          <Route path="/login" element={<Log/>} />
          
          </Routes>
          
          
      </div>
      
    </BrowserRouter>

    
    );
}

      export default App;
