import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import SinglePost from './SinglePost'

class PostsContainer extends Component {
  state = {}
  render() {
    if (Object.keys(this.props.data).length > 0) {
      return (
        <div
          className='ui fluid container'
          style={{
            //   borderStyle: 'solid',
            //   borderColor: 'blue',
            padding: '15px'
          }}
        >
          <h2>Posts</h2>
          <div className='ui centered cards'>
            {this.props.data.map(post => (
              <SinglePost post={post} key={post.id} />
            ))}
          </div>
        </div>
      )
    } else {
      return 'Loading'
    }
  }
}

// const mapStateToProps = state => ({
//   museumFilter: state.museumFilter
// })

export default connect(
  null,
  //   mapStateToProps,
  actions
)(PostsContainer)
