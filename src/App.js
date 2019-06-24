import React, { Component } from 'react'
import './App.css'
import PostsContainer from './posts/PostsContainer'
import StatsContainer from './stats/StatsContainer'

const API = 'https://jsonplaceholder.typicode.com/posts'

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({ data: data }))
  }

  render() {
    const { data } = this.state

    return (
      <div className='App'>
        <h1>AtomInvest Sample Blog</h1>
        <StatsContainer />
        <PostsContainer data={data} />
      </div>
    )
  }
}

export default App
