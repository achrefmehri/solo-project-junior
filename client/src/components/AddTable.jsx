import React, { useState } from 'react'


const AddDrink = (props) => {
    const [tableNumber,setTableNumber]=useState(0)
    const newTable ={
      tableNum:tableNumber,
    }
  return (
    <div className='add-drink-disp'>
        <h3>Table Number :</h3>
    <input type="text" placeholder='Table Number' onChange={(e)=>setTableNumber(e.target.value)} />
    <button className='add-drink-btn' onClick={()=>{props.addtable(newTable),props.view('tables')}}>Add Table</button>
    </div>
  )
}

export default AddDrink