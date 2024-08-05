
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { editContext } from '../context/CurrentEditState';

export default function Myarticle({ id, setEdit, editState, editSet, image, desc, title, overview, conclusion, type }) {
  const { state, setText } = useContext(editContext);

  const editArticle = (e) => {
    console.log(state);
    console.log(id);

    setEdit(id);

    setText({
      id, image, desc, title, overview, conclusion, type
    });

    editSet(!editState);
    
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <img src={image} alt="Article" className="w-full h-32 object-cover rounded-lg" />
      </div>
      <div className="w-full md:w-3/4 pl-0 md:pl-4">
        <h2 className="text-lg font-bold overflow-hidden mb-2">{title}</h2>
        <p className="text-gray-600 overflow-hidden mb-2">{overview}</p>
        <p className="text-gray-800 overflow-hidden">{desc}</p>
        <div className="flex mt-4 space-x-2">
          <Button onClick={(e) => editArticle(e)} className="btn btn-primary">Edit</Button>
          <Button className="btn btn-danger">Delete</Button>
        </div>
      </div>
    </div>
  );
}

