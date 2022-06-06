import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

function CreatePost({ isAuth }) {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')
  const postsCollectionRef = collection(db, 'posts')
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title: title,
      postText: postText,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
      },
    })
    navigate('/')
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [])

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
          <label> Title :</label>
          <input
            placeholder='Title ...'
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>
        <div className='inputGp'>
          <label> Post :</label>
          <textarea
            placeholder='Write your Article ...'
            onChange={(e) => {
              setPostText(e.target.value)
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost
