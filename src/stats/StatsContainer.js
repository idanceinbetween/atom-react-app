import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import StatsShow from './StatsShow'

class StatsContainer extends Component {
  state = {}
  render() {
    return (
      <div
        className='ui fluid container'
        // style={{ borderStyle: 'solid', borderColor: 'red', padding: '10px' }}
      >
        <h2>Statistics</h2>
        <StatsShow />
      </div>
    )
  }
}

export default connect(
  null,
  //   mapStateToProps,
  actions
)(StatsContainer)
