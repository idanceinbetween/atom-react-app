import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterWord } from '../actions'

class Filter extends Component {
  render() {
    return (
      <div>
        <select
          onChange={event =>
            this.props.dispatch(filterWord(event.target.value))
          }
        >
          <option value=''>-Filter-</option>
          {this.props.words.map(word => {
            return (
              <option key={word} value={word}>
                {word}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}

const mapStateToProps = ({ filterWord }) => ({
  filterWord
})

export default connect(mapStateToProps)(Filter)
