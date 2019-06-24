import React, { Component } from 'react'
import SinglePost from './SinglePost'

class PostsContainer extends Component {
  render() {
    if (this.props.posts) {
      return (
        <div
          className='ui fluid container'
          style={{
            //   borderStyle: 'solid',
            //   borderColor: 'blue',
            padding: '15px'
          }}
        >
          <h2>Posts</h2>
          <div className='ui centered cards'>
            {this.props.posts.map(post => (
              <SinglePost post={post} key={post.id} />
            ))}
          </div>
        </div>
      )
    } else {
      return 'Loading'
    }
  }
}

export default PostsContainer
