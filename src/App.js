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
import Profile from './com/Profile';

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


function App() {

  return (
    
    
    <BrowserRouter>
      
      <div className="App">
      
        <Routes>
        
       <Route path="/signup" element={<Signup />}/> 
          <Route path="/" element={<Log />}/> {/* Corrected Route */}

          <Route path="/readarticle" element={<ReadArticle/>} /> 
          <Route path="/single_article" element={<Show_clicked_article/>} />
          <Route path="/politicsarticle" element={<Politicsarticle/>} />
          <Route path="/profile" element={<Profile/>}/>

          
          <Route path="/writearticle" element={<WriteArticle/>} />
          <Route path="/recent" element={<Rec/>} />
          
          </Routes>
          
      </div>
      
    </BrowserRouter>

  
    );
}

      export default App;
