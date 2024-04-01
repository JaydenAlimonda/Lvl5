import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import About from './components/About';
import PostPage from './components/PostPage';
import axios from 'axios';

const App = () => {
  const [postBoard, setPostBoard] = useState([]);

  // Get all posts and set state

  const getPosts = () => {
    axios.get("/api/tradeposts")
    .then(res => setPostBoard(res.data))
    .catch(err => console.log(err))
  }

  // Add post and add to state
  
  const addPost = (newPost) => {
    axios.post("/api/tradeposts", newPost)
    .then(res => {
      setPostBoard( () => [ ...postBoard, res.data ])
    })
    .catch(err => console.log(err))
  }

  // Delete post and filter out of state
  
  const deletePost = (_id) => {
    axios.delete(`/api/tradeposts/${_id}`)
    .then(res => {
        setPostBoard(prev => prev.filter(post => post._id !== _id))
      })
      .catch(err => console.log(err))
    }

    // Update DB and update state
    
    const editPost = (update, _id) => {
      axios.put(`/api/tradeposts/${_id}`, update)
      .then(res => {
        setPostBoard(prev => prev.map(post => post._id !== _id ? post : res.data))
      })
      .catch(err => console.log(err))
    }

    // Get posts init for page

    useEffect(() => {
      getPosts();
    }, []);
    
    return (
      <Router>

      <h1>Appalachian Trade</h1>

      <nav className='nav--container'>
        <Link to='/' className='navlink'>
          Home
        </Link>
        <Link to='/createPost' className='navlink'>
          Create Post
        </Link>
        <Link to='/about' className='navlink'>
          About
        </Link>
      </nav>


      <Routes>

      
        
      
      <Route path='/' element={
          <div className='post--container'>
            {postBoard.map(post => (
              <div key={post._id} className='trade--posts'>
                <Home 
                  {...post}
                  deletePost={deletePost}
                  editPost={editPost} 
                />
              </div>
            ))}
          </div>
        } />

        <Route path='/createPost' element={<CreatePost btnTxt="Submit" addPost={addPost} />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:id' element={<PostPage />} /> {/* Route for individual item pages */}

      </Routes>

    </Router>
  )
}

export default App;
