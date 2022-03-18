import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingUseEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res);
            setPosts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
  },[]) /// call once
  return (
    <div>
        <ul>
        {
            posts && posts.map ((post)=><li key={post.id}>{post.name}</li>)
        }
        </ul>
    </div>
  )
}

export default DataFetchingUseEffect


// get individual post 


const DataFetchingUseEffectSinglePost = () => {
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
            setPost(res.data)
        })
        .catch((err)=> console.log(err))
    },[])
  return (
    <div>
        <input type="text" value={id} onClick={(e) => setId(e.target.value)}/>
        <div>{post.title}</div>
    </div>
  )
}

export default DataFetchingUseEffectSinglePost;


// data fetch on click of button but with useeffect

const DataFetchUseEffectwithButton = () => {
    const [id, setId] = useState(1)
    const [post, setPost] = useState({});
    const [idButton, setIdButton] = useState(0);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${setIdButton}`)
        .then((res)=>{
            setPost(res.data)
        }).catch((err) => console.log(err))
    },[setIdButton])
    return (
        <div>
            <input type="text" value={id} onChange={()=>setId(e.target.value)} />
            <button onClick={()=>setIdButton(id)}> get Post</button>
            <div>{post}</div>
        </div>
    )
} 
