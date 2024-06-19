import React from 'react'
import ReactDOM from 'react-dom'
import SideBar from './components/SideBar.jsx'
import NavBar from './components/NavBar.jsx'
import Billing from './components/Billing.jsx'

const App = () => {
  
 

  return (
    <div className='app-container'>
      <SideBar/>
      <NavBar/>
      <Billing/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
