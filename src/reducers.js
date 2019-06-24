import { combineReducers } from 'redux'
import { RECEIVE_POSTS, DELETE_POST, CATCH_ERROR } from './actions/types'

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.payload
    case DELETE_POST:
      return state.filter(post => post.id !== action.id)
    default:
      return state
  }
}

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case CATCH_ERROR:
      return action.error.message
    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts: postsReducer,
  error: errorReducer
})

export default rootReducer
