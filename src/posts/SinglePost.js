import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions'

const SinglePost = ({ post, deletePost }) => {
  return (
    <div className='ui card'>
      <div className='content'>
        <div className='header'>{post.title}</div>
        <div className='meta'>
          Post ID: {post.id} by author (ID): {post.userId}
        </div>
        <div className='description'>{post.body}</div>
      </div>
      <div className='extra content'>
        <div className='ui buttons'>
          <button
            className='ui red basic button'
            onClick={() => deletePost(post.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  { deletePost: deletePost }
)(SinglePost)
