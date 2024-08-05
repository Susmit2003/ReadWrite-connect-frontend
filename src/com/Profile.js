
import React, { useEffect, useState } from 'react';
import Myarticle from './Myarticle';
import WriteArticle from './WriteArticle';
import axios from 'axios';

export default function Profile() {
  const [article, setArticle] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("id");
    console.log('id ' + id);

    axios.get(`http://localhost:8000/getArticleByAuthor/${id}`)
      .then((data) => {
        setArticle(data.data);
        console.log('data  ', data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <div id="myProfilePic" className="flex justify-center mb-4">
        <img 
          src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w300/2023/10/free-images.jpg" 
          alt="Profile" 
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <div id="aboutWritter" className="mb-4 text-center">
        <p className="text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate assumenda neque maiores nobis voluptates repellat, enim ratione tenetur molestiae repudiandae est molestias unde soluta suscipit omnis consequuntur, sit dolore quasi dolorem vero sapiente sint? Unde laboriosam autem sint sapiente. Iste aspernatur accusamus sunt corporis non, dicta quaerat placeat veritatis?
        </p>
      </div>
      <div id="email" className="text-center mb-4 text-blue-500">
        Email
      </div>
      <div className="top-0 left-1/4 w-full max-w-md">
        {showEdit && <WriteArticle id={editId} />}
      </div>
      <div>
        {article && article.map((e) => (
          <Myarticle 
            key={e._id}
            setEdit={setEditId} 
            id={e._id} 
            editState={showEdit} 
            editSet={setShowEdit} 
            image={e.image} 
            title={e.title} 
            overview={e.overview} 
            desc={e.description} 
            conclusion={e.conclusion} 
            type={e.type}
          />
        ))}
      </div>
    </div>
  );
}
