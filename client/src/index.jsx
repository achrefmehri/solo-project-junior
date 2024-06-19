import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const [items, setItems] = useState([])
  
 

  return (
    <div>
      <h1>Item List</h1>
      <List items={items} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
