import { REQUEST_POSTS, RECEIVE_POSTS, DELETE_POST, CATCH_ERROR } from './types'

const API = 'https://jsonplaceholder.typicode.com/posts'

export function requestPosts() {
  return { type: REQUEST_POSTS }
}

export function receivePosts(data) {
  return { type: RECEIVE_POSTS, payload: data }
}

export function fetchPosts() {
  return function(dispatch) {
    dispatch(requestPosts())
    return fetch(API)
      .then(resp => resp.json())
      .then(data => dispatch(receivePosts(data)))
      .catch(error => {
        dispatch(catchError(error))
      })
  }
}

export function deletePost(id) {
  return { type: DELETE_POST, id }
}

export function catchError(error) {
  return { type: CATCH_ERROR, error }
}
