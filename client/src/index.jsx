import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import SideBar from './components/SideBar.jsx'
import NavBar from './components/NavBar.jsx'
import Billing from './components/Billing.jsx'
import Tables from './components/Tables.jsx'
import Drinks from './components/Drinks.jsx'
import axios from 'axios'


const App = () => {
  const[view,setView]=useState('tables')
  const [tables,setTables]=useState([])
  const [drinks,setDrinks]=useState([])
  const [selectedTable,setSelectedTable]=useState(0)
  const [reserverdTables,setReserverdTables]=useState([])
  const [billingItems,setBillingItems]=useState([])
  const [selectedDrink,setSelectedDrink]=useState([])
  console.log(selectedTable);
  //import TABLES from DB
  useEffect(()=>{
  axios('http://localhost:3000/api/tables')
  .then((results)=>setTables(results.data))
  .catch((err)=>err)
  },[])
//import DRINKS from db 
useEffect(()=>{
  axios('http://localhost:3000/api/drinks')
  .then((results)=>setDrinks(results.data))
  .catch((err)=>err)
  },[])
 // Status of Tables
const reservedTab =()=>{
  reserverdTables.forEach((elem)=>{
    
    if(tables.length>reserverdTables.length && indexOf(elem)===lastIndexOf(elem)){
     setReserverdTables([...reserverdTables,selectedTable])
  }
  })
}
const billItems =()=>{
  setBillingItems([...billingItems,selectedDrink])
}

const changeView=()=>{
  if(view==='tables'){
    return <Tables tables={tables} selectedTable={setSelectedTable} reservedTable={reservedTab}/>
  }
  else if( view === 'drinks'){
    return <Drinks drinks={drinks} selectedDrink={setSelectedDrink} billingItems={billItems}/>
  }
}
  return (
    <div className='app-container'>
      <div className="main-view">

      <SideBar view={setView}/>
      <NavBar tables={tables} reservedTab={reserverdTables}/>
      <Billing selectedTable={selectedTable} billItems={billingItems}/>
      </div>
      <div className="view-change">

      {changeView()}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
