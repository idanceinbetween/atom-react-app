import { RECEIVE_POSTS, DELETE_POST } from './actions/types'

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return { posts: action.payload }
    case DELETE_POST:
      return { posts: state.posts.filter(post => post.id !== action.id) }
    default:
      return state
  }
}

export default postsReducer
