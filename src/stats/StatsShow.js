import React, { Fragment } from 'react'

const StatsShow = () => {
  return (
    <Fragment>
      <div className='ui segment'>
        <div className='ui two column grid'>
          <div className='column'>
            <h2>Total word count</h2>
            <h3>10913</h3>
          </div>
          <div className='column'>
            <h2>Top 5 words</h2>
            <p>hello</p>
            <p>this</p>
            <p>has</p>
            <p>been</p>
            <p>fun!</p>
          </div>
        </div>
        <div className='ui vertical divider'>o o o</div>
      </div>
    </Fragment>
  )
}

export default StatsShow
