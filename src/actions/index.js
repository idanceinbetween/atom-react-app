import { REQUEST_POSTS, RECEIVE_POSTS, DELETE_POST } from './types'

const API = 'https://jsonplaceholder.typicode.com/'

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
      .then(
        resp => resp.json(),
        error => console.log('An error occurred:', error)
      )
      .catch(error => console.log('An error occurred:', error))
      .then(data => dispatch(receivePosts(data)))
  }
}

export function deletePost(id) {
  return { type: DELETE_POST, id }
}
