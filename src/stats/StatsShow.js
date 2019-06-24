import React, { Fragment } from 'react'

const StatsShow = () => {
  return (
    <Fragment>
      <div class='ui segment'>
        <div class='ui two column grid'>
          <div class='column'>
            <h2>Total word count</h2>
            <h3>10913</h3>
          </div>
          <div class='column'>
            <h2>Top 5 words</h2>
            <p>hello</p>
            <p>this</p>
            <p>has</p>
            <p>been</p>
            <p>fun!</p>
          </div>
        </div>
        <div class='ui vertical divider'>🏆</div>
      </div>
    </Fragment>
  )
}

export default StatsShow
