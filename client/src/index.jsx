import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import SideBar from './components/SideBar.jsx'
import NavBar from './components/NavBar.jsx'
import Billing from './components/Billing.jsx'
import Tables from './components/Tables.jsx'
import Drinks from './components/Drinks.jsx'
import axios from 'axios'
import Settings from './components/Settings.jsx'
import ReservedTabs from './components/ReservedTabs.jsx'
import BillingDisp from './components/BillingDisp.jsx'


const App = () => {
  const[view,setView]=useState('tables')
  const [tables,setTables]=useState([])
  const [drinks,setDrinks]=useState([])
  const [tableId,setTableid]=useState(0)
  const [reserverdTables,setReserverdTables]=useState([])
  const [billingItems,setBillingItems]=useState([])
  const [billings,setBillings]=useState([])
  const [refetech,setRefetech]=useState(false)

  //import TABLES from DB
  useEffect(()=>{
  axios('http://localhost:3000/api/tables')
  .then((results)=>setTables(results.data))
  .catch((err)=>err)
  },[!refetech])
//import DRINKS from db 
useEffect(()=>{
  axios('http://localhost:3000/api/drinks')
  .then((results)=>setDrinks(results.data))
  .catch((err)=>err)
  },[!refetech])
// adding drink
const addDrink =(newDrink)=>{
  axios.post("http://localhost:3000/api/drinks",newDrink)
  .then(()=>setRefetech(!refetech))
  .catch((err)=>err)
}
// delete drink
const deleteDrink =(id)=>{
    axios.delete(`http://localhost:3000/api/drinks/${id}`)
    .then(()=>setRefetech(!refetech))
    .catch((err)=>err)
  
}
//updateDrink 

const updateDrink =(id, newUpdt)=>{
  axios.put(`http://localhost:3000/api/drinks/${id}`, newUpdt)
    .then(() => { setRefetech(!refetech)
    })
    .catch((err) => err);
}

//addTable 
const addtables =(newtables)=>{
  axios.post("http://localhost:3000/api/tables",newtables)
  .then(()=>setRefetech(!refetech))
  .catch((err)=>err)
}

 // Status of Tables
const reservedTab =(selecTable)=>{
   setReserverdTables([...reserverdTables,selecTable]) 
}
const billItems =(newDrink)=>{
  setBillingItems([...billingItems,newDrink])
}
// billings 

const billing =(billing)=>{
  setBillings([...billings,billing]) 
}

const changeView=()=>{
  if(view==='tables'){
    return <Tables tables={tables} reservedTable={reservedTab} tableId={setTableid} view={setView}/>
  }
  else if( view === 'drinks'){
    return <Drinks drinks={drinks}  billingItems={billItems}/>
  }
  else if( view === 'settings'){
    return <Settings addDrink={addDrink} deleteDrink={deleteDrink} addtable={addtables} updateDrink={updateDrink} view={setView} drinks={drinks}/>
  }
  else if( view === 'reservedTab'){
     return <ReservedTabs reserverdTables={reserverdTables}/>
  }
  else if( view === 'billingDisp'){
    return <BillingDisp billings={billings}/>
 }
}
  return (
    <div className='app-container'>
      <div className="main-view">

      <SideBar view={setView}/>
      <NavBar tables={tables} reservedTab={reserverdTables}view={setView} />
      <Billing billItems={billingItems} tableId={tableId} billings={billing} refetech={setBillingItems} tableRefetch ={setTableid}/>
      </div> 
      <div className="view-change">

      {changeView()}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
