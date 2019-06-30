import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'

import PostsContainer from './posts/PostsContainer'
import StatsContainer from './stats/StatsContainer'

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>AtomInvest Sample Blog</h1>
        <StatsContainer />
        <PostsContainer />
      </div>
    )
  }
}

const mapStateToProps = ({ posts, error }) => ({
  posts,
  error
})

export default connect(
  // null,
  mapStateToProps,
  { fetchPosts }
)(App)
