import React from 'react'

const SinglePost = ({ post }) => {
  return (
    <div className='ui card'>
      <div className='content'>
        <div className='header'>{post.title}</div>
        <div className='meta'>
          Post id: {post.id} | Author ID: {post.userId}
        </div>
        <div className='description'>{post.body}</div>
      </div>
      <div class='extra content'>
        <div class='ui buttons'>
          <button class='ui red basic button'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
