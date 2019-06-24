import { createStore, applyMiddleware } from 'redux'
import postsReducer from './reducers'
import thunk from 'redux-thunk'

const configureStore = () => {
  return createStore(postsReducer, applyMiddleware(thunk))
}
export default configureStore
