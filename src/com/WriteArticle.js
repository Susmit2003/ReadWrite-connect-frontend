
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Editor } from "@tinymce/tinymce-react";
import swal from 'sweetalert2';
import { editContext } from '../context/CurrentEditState';

export default function WriteArticle(props) {
  const [title, setTitle] = useState("");
  const [over, setOver] = useState("");
  const [des, setDes] = useState("");
  const [con, setCon] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [done, setDone] = useState(false);
  const [author, setAuthor] = useState("");
  const[videoUrl, setUrl] = useState();
  const { state, setText } = useContext(editContext);

  useEffect(() => {
    if (!done) {
      setTitle(state.title);
      setOver(state.overView);
      setImage(state.image);
    }
    setDone(true);
  }, [state]);

  const handleChange2 = (e) => {
    setDes(e.substring(3, e.length - 4));
  };

  function handleArticle() {
    if (!image || !title || !over || !des || !con) {
      swal.fire("Required to fill every field");
      return;
    }

    setDone(true);

    if (props.id) {
      axios.put(`http://localhost:8000/updateArticle/${props.id}`, { image, title, over, des, con, type, id: localStorage.getItem("curr_id"), videoUrl })
        .then((re) => console.log(re))
        .catch((err) => console.log(err));

      setDone(false);
    } else {
      const ath = localStorage.getItem('id');
      axios.post("http://localhost:8000/article", { image, title, over, des, con, type, like: 0, dislike: 0, authorName: author, id: localStorage.getItem("id"), videoUrl })
        .then((res) => {
          console.log(res)
          swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your article has been posted",
            showConfirmButton: false,
            timer: 1500
          });
          
        })
        .catch((err) => console.log(err))

        setImage("")
        
    }
  }

  const handleChange = (e) => {
    setType(e.target.value);
  };

  function convToBase64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
  } 

  return (
    <div id="write_article" className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-2xl w-full space-y-8 p-8 bg-white border border-gray-300 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Write Article</h2>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Title" 
            name="title" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full border rounded p-2 mt-2"
          />
          {image && <img src={image} alt="Article" className="mt-2 w-full h-auto rounded" />}
          <div className="mt-2">
            <input 
              required 
              accept="image/*" 
              type="file" 
              onChange={convToBase64} 
              className="w-full border p-2 rounded"
            />
          </div>
          <input 
            required 
            type="text" 
            placeholder="Overview" 
            name="over" 
            id="over" 
            value={over} 
            onChange={(e) => setOver(e.target.value)} 
            className="w-full border rounded p-2 mt-2"
          />
          <input 
            required 
            type="text" 
            placeholder="Author Name" 
            name="author" 
            id="author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            className="w-full border rounded p-2 mt-2"
          />
          <Editor
            apiKey="yxsdqmynqh1gm1hx9ikthppbqzw6mqxrlner7trs8r6rv4bf"
            value={des}
            init={{
              height: 200,
              menubar: false,
            }}
            onEditorChange={(e) => handleChange2(e)}
          />
          <input 
            required 
            type="text" 
            placeholder="Conclusion" 
            name="con" 
            id="con" 
            value={con} 
            onChange={(e) => setCon(e.target.value)} 
            className="w-full border rounded p-2 mt-2"
          />
          <input 

            type="text" 
            placeholder="video Url" 
            name="url" 
            id="url" 
            value={videoUrl} 
            onChange={(e) => setUrl(e.target.value)} 
            className="w-full border rounded p-2 mt-2"
          />
          <select 
            onChange={(e) => handleChange(e)} 
            className="w-full border rounded p-2 mt-2"
          >
            <option value="">Select Type</option>
            <option value="spo">Sport</option>
            <option value="pol">Politics</option>
            <option value="edu">Educational</option>
          </select>
          <button 
            onClick={handleArticle} 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { Editor } from "@tinymce/tinymce-react";
// import swal from 'sweetalert2';
// import { editContext } from '../context/CurrentEditState';

// export default function WriteArticle(props) {
//   const [title, setTitle] = useState("");
//   const [over, setOver] = useState("");
//   const [des, setDes] = useState("");
//   const [con, setCon] = useState("");
//   const [image, setImage] = useState("");
//   const [type, setType] = useState("");
//   const [done, setDone] = useState(false);
//   const [author, setAuthor] = useState("");
//   const [videoUrl, setUrl] = useState("");
//   const { state, setText } = useContext(editContext);

//   useEffect(() => {
//     if (!done) {
//       setTitle(state.title || "");
//       setOver(state.overView || "");
//       setImage(state.image || "");
//       setAuthor(state.author || "");
//       setDes(state.description || "");
//       setCon(state.conclusion || "");
//       setUrl(state.videoUrl || "");
//       setType(state.type || "");
//       setDone(true);
//     }
//   }, [done, state]); // Ensure useEffect runs only once and when `state` changes

//   const handleChange2 = (e) => {
//     setDes(e.substring(3, e.length - 4));
//   };

//   function handleArticle() {
//     if (!image || !title || !over || !des || !con) {
//       swal.fire("Required to fill every field");
//       return;
//     }

//     if (props.id) {
//       axios.put(`http://localhost:8000/updateArticle/${props.id}`, { image, title, over, des, con, type, id: localStorage.getItem("curr_id"), videoUrl })
//         .then((res) => {
//           console.log(res);
//           swal.fire("Article updated successfully");
//         })
//         .catch((err) => console.log(err));
//     } else {
//       axios.post("http://localhost:8000/article", { image, title, over, des, con, type, like: 0, dislike: 0, authorName: author, id: localStorage.getItem("id"), videoUrl })
//         .then((res) => {
//           console.log(res);
//           swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Your article has been posted",
//             showConfirmButton: false,
//             timer: 1500
//           });
//         })
//         .catch((err) => console.log(err));
//     }
//   }

//   const handleChange = (e) => {
//     setType(e.target.value);
//   };

//   function convToBase64(e) {
//     var reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload = () => {
//       setImage(reader.result);
//     };
//   }

//   return (
//     <div id="write_article" className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="max-w-2xl w-full space-y-8 p-8 bg-white border border-gray-300 rounded-lg shadow-md">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold">Write Article</h2>
//         </div>
//         <div>
//           <input 
//             type="text" 
//             placeholder="Title" 
//             name="title" 
//             id="title" 
//             value={title} 
//             onChange={(e) => setTitle(e.target.value)} 
//             className="w-full border rounded p-2 mt-2"
//           />
//           {image && <img src={image} alt="Article" className="mt-2 w-full h-auto rounded" />}
//           <div className="mt-2">
//             <input 
//               required 
//               accept="image/*" 
//               type="file" 
//               onChange={convToBase64} 
//               className="w-full border p-2 rounded"
//             />
//           </div>
//           <input 
//             required 
//             type="text" 
//             placeholder="Overview" 
//             name="over" 
//             id="over" 
//             value={over} 
//             onChange={(e) => setOver(e.target.value)} 
//             className="w-full border rounded p-2 mt-2"
//           />
//           <input 
//             required 
//             type="text" 
//             placeholder="Author Name" 
//             name="author" 
//             id="author" 
//             value={author} 
//             onChange={(e) => setAuthor(e.target.value)} 
//             className="w-full border rounded p-2 mt-2"
//           />
//           <Editor
//             apiKey="yxsdqmynqh1gm1hx9ikthppbqzw6mqxrlner7trs8r6rv4bf"
//             value={des}
//             init={{
//               height: 200,
//               menubar: false,
//             }}
//             onEditorChange={handleChange2}
//           />
//           <input 
//             required 
//             type="text" 
//             placeholder="Conclusion" 
//             name="con" 
//             id="con" 
//             value={con} 
//             onChange={(e) => setCon(e.target.value)} 
//             className="w-full border rounded p-2 mt-2"
//           />
//           <input 
//             type="text" 
//             placeholder="video Url" 
//             name="url" 
//             id="url" 
//             value={videoUrl} 
//             onChange={(e) => setUrl(e.target.value)} 
//             className="w-full border rounded p-2 mt-2"
//           />
//           <select 
//             onChange={handleChange} 
//             value={type}
//             className="w-full border rounded p-2 mt-2"
//           >
//             <option value="">Select Type</option>
//             <option value="spo">Sport</option>
//             <option value="pol">Politics</option>
//             <option value="edu">Educational</option>
//           </select>
//           <button 
//             onClick={handleArticle} 
//             className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { Editor } from "@tinymce/tinymce-react";
// import swal from 'sweetalert2';
// import { editContext } from '../context/CurrentEditState';
// import _ from 'lodash';

// export default function WriteArticle(props) {
//   const [title, setTitle] = useState("");
//   const [over, setOver] = useState("");
//   const [des, setDes] = useState("");
//   const [con, setCon] = useState("");
//   const [image, setImage] = useState("");
//   const [type, setType] = useState("");
//   const [done, setDone] = useState(false);
//   const [author, setAuthor] = useState("");
//   const [videoUrl, setUrl] = useState("");
//   const { state, setText } = useContext(editContext);

//   useEffect(() => {
//     if (!done) {
//       setTitle(state.title || "");
//       setOver(state.overView || "");
//       setImage(state.image || "");
//       setAuthor(state.author || "");
//       setDes(state.description || "");
//       setCon(state.conclusion || "");
//       setUrl(state.videoUrl || "");
//       setType(state.type || "");
//       setDone(true);
//     }
//   }, [done, state]);

//   // Debounced handler to avoid infinite loop
//   const handleChange2 = _.debounce((content) => {
//     const strippedContent = content.substring(3, content.length - 4);
//     if (strippedContent !== des) {
//       setDes(strippedContent);
//     }
//   }, 300);

//   function handleArticle() {
//     if (!image || !title || !over || !des || !con) {
//       swal.fire("Required to fill every field");
//       return;
//     }

//     if (props.id) {
//       axios.put(`http://localhost:8000/updateArticle/${props.id}`, { image, title, over, des, con, type, id: localStorage.getItem("curr_id"), videoUrl })
//         .then((res) => {
//           console.log(res);
//           swal.fire("Article updated successfully");
//         })
//         .catch((err) => console.log(err));
//     } else {
//       axios.post("http://localhost:8000/article", { image, title, over, des, con, type, like: 0, dislike: 0, authorName: author, id: localStorage.getItem("id"), videoUrl })
//         .then((res) => {
//           console.log(res);
//           swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Your article has been posted",
//             showConfirmButton: false,
//             timer: 1500
//           });
//         })
//         .catch((err) => console.log(err));
//     }
//   }

//   const handleChange = (e) => {
//     setType(e.target.value);
//   };

//   function convToBase64(e) {
//     var reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload = () => {
//       setImage(reader.result);
//     };
//   }

//   return (
//     <div id="write_article" className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="max-w-2xl w-full space-y-8 p-8 bg-white border border-gray-300 rounded-lg shadow-md">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold">Write Article</h2>
//         </div>
//         <div>
//           <input 
//             type="text" 
//             placeholder="Title" 
//             name="title" 
//             id="title" 
//             value={title} 
//             onChange={(e) => setTitle(e.target.value)} 
//             className="w-full border rounded p-2 mt-2"
//           />
//           {image && <img src={image} alt="Article" className="mt-2 w-full h-auto rounded" />}
//           <div className="mt-2">
//             <input 
//               required 
//               accept="image/*" 
//               type="file" 
//               onChange={convToBase64} 
//               className="w-full border p-2 rounded"
//             />
//           </div>
//           <input 
//             required 
//             type="text" 
//             placeholder="Overview" 
//             name="over" 
//             id="over" 
//             value={over} 
//             onChange={(e) => setOver(e.target.value)} 
//             className="w-full border rounded p-2 mt-2"
//           />
//           <input 
//             required 
//             type="text" 
//             placeholder="Author Name" 
//             name="author" 
//             id="author" 
//             value={author} 
//             onChange={(e) => setAuthor(e.target.value)} 
//             className="w-full border rounded p-2 mt-2"
//           />
//           <Editor
//             apiKey="yxsdqmynqh1gm1hx9ikthppbqzw6mqxrlner7trs8r6rv4bf"
//             value={des}
//             init={{
//               height: 200,
//               menubar: false,
//             }}
//             onEditorChange={(e) => handleChange2(e)}
//           />
//           <input 
//             required 
//             type="text" 
//             placeholder="Conclusion" 
//             name="con" 
//             id="con" 
//             value={con} 
//             onChange={(e) => setCon(e.target.value)} 
//             className="w-full border rounded p-2 mt-2"
//           />
//           <input 
//             type="text" 
//             placeholder="video Url" 
//             name="url" 
//             id="url" 
//             value={videoUrl} 
//             onChange={(e) => setUrl(e.target.value)} 
//             className="w-full border rounded p-2 mt-2"
//           />
//           <select 
//             onChange={handleChange} 
//             value={type}
//             className="w-full border rounded p-2 mt-2"
//           >
//             <option value="">Select Type</option>
//             <option value="spo">Sport</option>
//             <option value="pol">Politics</option>
//             <option value="edu">Educational</option>
//           </select>
//           <button 
//             onClick={handleArticle} 
//             className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
