import React, { Component } from 'react'
import SinglePost from './SinglePost'

class PostsContainer extends Component {
  render() {
    const { posts, error } = this.props
    if (this.props.posts) {
      return (
        <div
          className='ui fluid container'
          style={{
            padding: '15px'
          }}
        >
          <h2>Posts</h2>
          {posts && (
            <div className='ui centered cards'>
              {posts.map(post => (
                <SinglePost post={post} key={post.id} />
              ))}
            </div>
          )}
          {error && (
            <div style={{ padding: '20px' }}>
              <p>Sorry, something went wrong: </p>
              <p>{error}</p>
            </div>
          )}
        </div>
      )
    } else {
      return 'Loading'
    }
  }
}

export default PostsContainer
