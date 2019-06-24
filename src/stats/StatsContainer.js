import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const allPostsBodyArray = posts => posts.map(p => p.body)
const sentencesOfAPost = post => post.split('\n')
const wordsOfASentence = sentence => sentence.split(' ')

const allWords = posts => {
  let allWords = []
  allPostsBodyArray(posts).map(post =>
    sentencesOfAPost(post).map(sentence =>
      allWords.push(wordsOfASentence(sentence))
    )
  )
  return allWords.flat()
}

const countTotalWords = posts => allWords(posts).length

const uniqueWordCountPairs = words => {
  let wordCountPairs = {}
  words.map(word => {
    return wordCountPairs[word]
      ? (wordCountPairs[word] += 1)
      : (wordCountPairs[word] = 1)
  })
  return wordCountPairs
}

const sortedCounts = wordCountPairs => {
  // eslint-disable-next-line
  return Object.values(wordCountPairs).sort((a, b) => {
    if (a > b) return -1
    if (a < b) return 1
    if (a === b) return 0
  })
}

const top5words = uniqueWordCountPairs => {
  let top5words = []
  const greatestCounts = sortedCounts(uniqueWordCountPairs).splice(0, 5)
  for (var property in uniqueWordCountPairs) {
    if (greatestCounts.includes(uniqueWordCountPairs[property])) {
      top5words.push(property)
    }
  }
  return top5words
}

const StatsContainer = ({ posts }) => {
  return (
    <div className='ui fluid container'>
      <h2>Statistics</h2>

      <div className='ui segment'>
        <div className='ui two column grid'>
          <div className='column'>
            <h2>Total Word Count</h2>
            <p style={{ color: '#666666' }}>across all the posts body</p>
            <h3>{countTotalWords(posts)}</h3>
          </div>
          <div className='column'>
            <h2>Top Five Frequent Words</h2>
            {top5words(uniqueWordCountPairs(allWords(posts)))
              .splice(0, 5)
              .map(word => (
                <p key={word}>{word}</p>
              ))}
          </div>
        </div>
        <div className='ui vertical divider'>o o o</div>
      </div>
    </div>
  )
}

export default connect(
  null,
  actions
)(StatsContainer)
