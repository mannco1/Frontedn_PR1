import './css/Post.css'



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(-1);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    
    axios.get('http://localhost:3001/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error loading data', error));
  }, []);

  const handleSave = () => {
    const newPost = { title, image, content };

    if (currentPostIndex === -1) {
      
      axios.post('http://localhost:3001/posts', newPost)
        .then(response => setPosts([...posts, response.data]))
        .catch(error => console.error('Error creating post', error));
    } else {
      
      const postId = posts[currentPostIndex]._id; 
      axios.put(`http://localhost:3001/posts/${postId}`, newPost)
        .then(response => {
          const updatedPosts = [...posts];
          updatedPosts[currentPostIndex] = response.data;
          setPosts(updatedPosts);
          setCurrentPostIndex(-1);
        })
        .catch(error => console.error('Error editing post', error));
    }

    
    setTitle('');
    setImage('');
    setContent('');
  };

  const handleEdit = (index) => {
    const postToEdit = posts[index];
    setTitle(postToEdit.title);
    setImage(postToEdit.image);
    setContent(postToEdit.content);
    setCurrentPostIndex(index);
  };

  const handleDelete = (index) => {
    const postIdToDelete = posts[index]._id; 

    axios.delete(`http://localhost:3001/posts/${postIdToDelete}`)
      .then(response => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
      })
      .catch(error => console.error('Error deleting post', error));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className='container1'>
      <div className='flex__l' id='field'>
        <label className='l1'>
          Заголовок:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label className='l2'>
          Картинка:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {image && <img src={image} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        <br />
        <label className='l3'>
          Основной текст:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <button className='confirm' onClick={handleSave}>{currentPostIndex === -1 ? 'Создать пост' : 'Сохранить'}</button>
      </div>


      <div className='flex__post'>
        {posts.map((post, index) => (
          <div className='post' key={index}>
            <h2>{post.title}</h2>
            <p><img src={post.image ? post.image : "https://i.ibb.co/KxxCPPT/ru-default-large-default.jpg"}  alt='Preview' style={{ maxWidth: '100%', maxHeight: '100%' }} /></p>
            <p className='p1'>Основной текст:{post.content}</p>
            <button className='btnEdit' onClick={() => handleEdit(index)}>Редактировать</button>
            <button className='btnDelete' onClick={() => handleDelete(index)}>Удалить</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Post;
