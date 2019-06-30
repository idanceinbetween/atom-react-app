import React from 'react'
import SinglePost from './SinglePost'

import { connect } from 'react-redux'
import { fetchPosts, catchError } from '../actions'

const checkObjectKey = posts => {
  const attributes = ['id', 'userId', 'title', 'body']
  const values = posts
    .map(post =>
      attributes.map(attribute => Object.keys(post).includes(attribute))
    )
    .flat()
  if (values.includes(false)) {
    return false
  } else {
    return true
  }
}

const renderObjectKeyError = catchError => {
  catchError({ message: objectKeyError })
  return null
}

const objectKeyError =
  'Individual posts cannot be rendered due to mismatched object keys. Please contact administrator.'

const renderFilteredPosts = (posts, filterWord) => {
  const filteredPosts = posts.filter(post =>
    post.body.split(' ').includes(filterWord)
  )

  return (
    <div className='ui centered cards'>
      {filteredPosts.map(post => (
        <SinglePost post={post} key={post.id} />
      ))}
    </div>
  )
}

const PostsContainer = ({ posts, error, filter, catchError }) => {
  if (posts) {
    return (
      <div
        className='ui fluid container'
        style={{
          padding: '15px'
        }}
      >
        <h2>Posts</h2>
        {posts && filter && renderFilteredPosts(posts, filter)}
        {posts && checkObjectKey(posts) && (
          <div className='ui centered cards'>
            {posts.map(post => (
              <SinglePost post={post} key={post.id} />
            ))}
          </div>
        )}
        {posts && !checkObjectKey(posts) && renderObjectKeyError(catchError)}
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

const mapStateToProps = ({ posts, error, filter }) => ({
  posts,
  error,
  filter
})

export default connect(
  mapStateToProps,
  { fetchPosts, catchError }
)(PostsContainer)

// export default PostsContainer
