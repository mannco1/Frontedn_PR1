import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/css/PostList.css'

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Загрузка данных с сервера при монтировании компонента
    axios.get('http://localhost:3001/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Ошибка при загрузке данных', error));
  }, []);

  return (
    <main className='postList'>
      <ul className='posts'>
        {posts.map(post => (
          <li className='post' key={post.id}>
            <h2 className='postName'>{post.title}</h2>
            <div className='postContent'>
              <img className='postImage' src={post.image || "https://i.ibb.co/KxxCPPT/ru-default-large-default.jpg"} alt='Preview'/>
              <p className='postTxt'>{post.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PostList;
