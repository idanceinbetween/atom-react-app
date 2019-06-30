import { RECEIVE_POSTS, DELETE_POST, CATCH_ERROR, FILTER_WORD } from './types'

const API = 'https://jsonplaceholder.typicode.com/posts'

export function receivePosts(data) {
  return { type: RECEIVE_POSTS, payload: data }
}

export function fetchPosts() {
  return function(dispatch) {
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

export function filterWord(word) {
  return { type: FILTER_WORD, word }
}
