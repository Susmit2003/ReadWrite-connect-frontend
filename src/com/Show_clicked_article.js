
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Show_clicked_article() {
  const [articles, setArticles] = useState();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showAllComments, setShowAllComments] = useState(false);
  const [authorArticles, setAuthorArticles] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("curr_id");
    const userId = localStorage.getItem('id');
    axios.get(`http://localhost:8000/get_singlearticle/${id}`)
      .then((data) => {
        setArticles(data.data[0]);
        axios.get(`http://localhost:8000/getAllArticleByAuthorForUser/${data.data[0].author}`)
          .then((response) => {
            setAuthorArticles(response.data[0]);
          })
          .catch((err) => console.log(err));
        axios.get(`http://localhost:8000/getComments/${id}`)
          .then((response) => {
            if (Array.isArray(response.data.comments)) {
              setComments(response.data.comments);
            } else {
              console.error('Expected an array of comments, but got:', response.data);
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  const addComment = () => {
    const articleId = localStorage.getItem("curr_id");
    const userId = localStorage.getItem('id');
    const username = localStorage.getItem('currentLogUser');
    axios.post('http://localhost:8000/addComment', { articleId, userId, text: newComment ,username})
      .then((response) => {
        if (response.data.comment) {
          setComments([response.data.comment, ...comments]);
          setNewComment('');
        } else {
          console.error('Expected a comment object, but got:', response.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const addLike = () => {
    const articleId = localStorage.getItem("curr_id");
    const userId = localStorage.getItem('id');
   
    axios.patch(`http://localhost:8000/addlike/${articleId}`, {userId})
    .then(() => console.log('Like added'))
    .catch((err) => console.log(err))
  };

  const adddisLike = () => {
    const articleId = localStorage.getItem("curr_id");
    axios.post('http://localhost:8000/dislikeArticle', { articleId })
      .then((response) => {
        setArticles(prev => ({ ...prev, dislike: response.data.dislike }));
      })
      .catch((err) => console.log(err));
  };

  const showArticles = () => {
    navigate(`/author/${articles.author}`);
  };

  const toggleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  const displayComments = showAllComments ? comments : comments.slice(0, 5);

  return (
    <div id="showArticleMainDiv" className="flex flex-col items-center py-12 px-6 md:px-12 lg:px-16 bg-gray-50">
      {/* Article Display Code */}
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 mb-12">
        {articles && (
          <>
            <div id="singleArticleImg" className="mb-6">
              <img src={articles.image} alt="Article Image" className="rounded-lg shadow-md w-full object-cover h-64" />
            </div>
            <h1 className="text-4xl font-bold mb-6 text-gray-800">{articles.title}</h1>
            <div id="singleArticleOver" className="mb-6">
              <p className="text-lg text-gray-600">{articles.overview}</p>
            </div>
            <div id="singleArticleDes" className="mb-6">
              <p className="text-lg text-gray-700">{articles.description}</p>
            </div>
            <div id="singleArticleCon" className="mb-8">
              <p className="text-lg text-gray-700">{articles.conclusion}</p>
            </div>
            <div className="flex space-x-6 mb-8">
              <div onClick={addLike} className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900">
                <i className="fas fa-thumbs-up text-2xl"></i>
                <span className="ml-2 text-lg font-semibold"><FontAwesomeIcon icon={faHeart}  />{articles.likes?.length || 0}</span>
              </div>
              <div onClick={adddisLike} className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900">
                <i className="fas fa-thumbs-down text-2xl"></i>
                <span className="ml-2 text-lg font-semibold"></span>
              </div>
              <div onClick={showArticles} className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900">
                <i className="fas fa-user text-2xl"></i>
                <span className="ml-2 text-lg font-semibold">👤{articles.author.username}</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Comment Section */}
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Comments</h2>
        <div className="mb-6">
          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <button
            onClick={addComment}
            className="mt-4 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Post Comment
          </button>
        </div>
        {displayComments.map((e) => (
          <div key={e._id} className="mb-4 border-b pb-4">
            <span className="font-semibold text-gray-800">@{e.username} :</span>
            <p className="text-gray-700">{e.text}</p>
          </div>
        ))}
        {comments.length > 5 && (
          <button
            onClick={toggleShowAllComments}
            className="mt-6 px-6 py-3 bg-gray-500 text-white font-bold rounded-lg shadow hover:bg-gray-700 transition duration-200"
          >
            {showAllComments ? 'Show Less' : 'Load More Comments'}
          </button>
        )}
      </div>
    </div>
  );
}

