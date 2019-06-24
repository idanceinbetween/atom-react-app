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
    const { posts } = this.props

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>AtomInvest Sample Blog</h1>
        <StatsContainer posts={posts} />
        <PostsContainer posts={posts} />
      </div>
    )
  }
}

const mapStateToProps = ({ posts = [] }) => ({
  posts
})

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App)
