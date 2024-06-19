import React, { useState } from 'react'


const AddDrink = (props) => {
    const [drinkName,setDrinkName]=useState('')
    const [drinkPrice,setDrinkPrice]=useState(0)
    const [drinkCategory,setDrinkCategory]=useState('')
    const newDrink ={
        name:drinkName,
        price:drinkPrice,
        category:drinkCategory
    }
  return (
    <div className='add-drink-disp'>
        <h3>Drinks Name :</h3>
    <input type="text" placeholder='Drinks Name' onChange={(e)=>setDrinkName(e.target.value)} />
    <h3>Drinks Price : </h3>
    <input type="number" placeholder='Drinks Price' onChange={(e)=>setDrinkPrice(e.target.value)} />
    <h3>Drink Category : </h3>
    <input type="text" placeholder='Drinks Category' onChange={(e)=>setDrinkCategory(e.target.value)} />
    <button className='add-drink-btn' onClick={()=>{props.addDrink(newDrink),props.view('drinks')}}>Add Drink</button>
    </div>
  )
}

export default AddDrink