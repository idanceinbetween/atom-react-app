import React from 'react'
import SinglePost from './SinglePost'

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

const PostsContainer = ({ posts, error, catchError }) => {
  if (posts) {
    return (
      <div
        className='ui fluid container'
        style={{
          padding: '15px'
        }}
      >
        <h2>Posts</h2>
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

export default PostsContainer
