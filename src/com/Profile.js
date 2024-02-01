import React, { useEffect,useState } from 'react'
import Myarticle from './Myarticle'
import WriteArticle from './WriteArticle';
import axios from 'axios'

export default function Profile() {
   const [article,setArticle]=useState();

    const [showEdit, setShowEdit] = useState(false);
    const [editId, setEditId] = useState(null);

   useEffect(()=>{
        const id=localStorage.getItem("curr_id")
        axios.get("http://localhost:8000/getArticleByAuthor/"+id)
        .then((data)=>{
            setArticle(data.data);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    

   },[])

  return (
    <div>
      <div id="myProfilePic">
        <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w300/2023/10/free-images.jpg"></img>
      </div>
      <div id="aboutWritter">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate assumenda neque maiores nobis voluptates repellat, enim ratione tenetur molestiae repudiandae est molestias unde soluta suscipit omnis consequuntur, sit dolore quasi dolorem vero sapiente sint? Unde laboriosam autem sint sapiente. Iste aspernatur accusamus sunt corporis non, dicta quaerat placeat veritatis?
      
      </div>
      <div id="email">Email</div>
      <div style={{position:"fixed", top: "10vh", left:"12vw"}}>
              {showEdit&&<WriteArticle id = {editId}/>}

          </div>
      <div>

        {
            article&&article.map((e) => {
                return(
                    <Myarticle setEdit = {setEditId} id={e._id} editState = {showEdit} editSet = {setShowEdit} image={e.image} title = {e.title} overview={e.overview} desc = {e.description} conclusion={e.conclusion} type={e.type}/>
                )
            })
        }
          
          
     
      </div>


    </div>
  )
}
