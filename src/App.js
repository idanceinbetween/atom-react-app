import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts, catchError } from './actions'

import PostsContainer from './posts/PostsContainer'
import StatsContainer from './stats/StatsContainer'

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts, error, catchError } = this.props

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>AtomInvest Sample Blog</h1>
        <StatsContainer posts={posts} />
        <PostsContainer posts={posts} error={error} catchError={catchError} />
      </div>
    )
  }
}

const mapStateToProps = ({ posts = [], error = null }) => ({
  posts,
  error
})

export default connect(
  mapStateToProps,
  { fetchPosts, catchError }
)(App)
