import React from 'react'
import FetchBooksContainer from './app/containers/fetchBooksContainer'
import DisplayBooksContainer from './app/containers/displayBooksContainer'

function App() {

  return (
    <div>
      <h1>Redux-Saga Book Reader</h1>
      {/* Calling the containers to render UI */}
      <FetchBooksContainer />
      <DisplayBooksContainer />
 </div>
  )
}

export default App
