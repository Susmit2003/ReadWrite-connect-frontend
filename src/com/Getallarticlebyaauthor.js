// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Card from './Card';

// export default function Getallarticlebyaauthor() {
//     const [articles, setArticles] = useState(null);
//     const [authorArticles, setAuthorArticles] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const id = localStorage.getItem("curr_id");
//         axios.get(`http://localhost:8000/get_singlearticle/${id}`)
//             .then((data) => {
//                 const articleData = data.data[0];
//                 console.log(articleData);
//                 setArticles(articleData);
//                 return axios.get(`http://localhost:8000/getAllArticleByAuthorForUser/${articleData.author}`);
//             })
//             .then((data) => {
//                 console.log(data);
//                 setAuthorArticles(data.data);
//             })
//             .catch(err => console.log(err));
//     }, []);

//     const handleClick = (e) => {
//         localStorage.setItem('curr_id', e._id);
//         navigate('/single_article');
//     };

//     return (
//         <div>
//             {authorArticles && authorArticles.length > 0 ? (
//                 authorArticles.map((e) => (
//                     <div key={e._id} onClick={() => handleClick(e)}>
//                         <Card title={e.title} img={e.image} des={e.description} over={e.overview} con={e.conclusion} />
//                     </div>
//                 ))
//             ) : (
//                 <p>No articles found for this author.</p>
//             )}
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';

export default function Getallarticlebyaauthor() {
    const [articles, setArticles] = useState(null);
    const [authorArticles, setAuthorArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const id = localStorage.getItem("curr_id");
        axios.get(`http://localhost:8000/get_singlearticle/${id}`)
            .then((data) => {
                const articleData = data.data[0];
                console.log(articleData);
                setArticles(articleData);
                return axios.get(`http://localhost:8000/getAllArticleByAuthorForUser/${articleData.author}`);
            })
            .then((data) => {
                console.log(data);
                setAuthorArticles(data.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleClick = (e) => {
        localStorage.setItem('curr_id', e._id);
        navigate('/single_article');
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {authorArticles && authorArticles.length > 0 ? (
                authorArticles.map((e) => (
                    <div key={e._id} onClick={() => handleClick(e)}>
                        <Card title={e.title} img={e.image} des={e.description} over={e.overview} con={e.conclusion} />
                    </div>
                ))
            ) : (
                <p className="text-center">No articles found for this author.</p>
            )}
        </div>
    );
}




