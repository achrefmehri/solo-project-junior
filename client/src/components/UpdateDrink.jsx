import React, { useState } from 'react'
import { GrUpdate } from "react-icons/gr";

const UpdateDrink = (props) => {
    const [drinkId,setDrinkId]=useState(0)
    const [updDisplay,setUpdDisplay]=useState('')
    const [drinkName,setDrinkName]=useState('')
    const [drinkPrice,setDrinkPrice]=useState(0)
    const [drinkCategory,setDrinkCategory]=useState('')
    console.log(drinkId);
    const newDrink ={
        name:drinkName,
        price:drinkPrice,
        category:drinkCategory
    }
    if(updDisplay===''){
        return (
            <>
            <h3 className='update-drinks-disp'>Update Drink</h3>
            <br></br>
            <div className="drinks-container">
             {props.drinks.map((elem) => {
                    return (
                    <div key={elem.id} className="drink-item" >
                        <GrUpdate size={20} onClick={()=>{setDrinkId(elem.id),setUpdDisplay('upd-display')}}/>
                      <span>{elem.name}</span>
                      <span>{elem.price} TND</span>
                    </div>
                  );
              })}
            </div>
            </>
          )
    }
    else if(updDisplay==='upd-display'){
        return (
            <div className='add-drink-disp'>
        <h3>Drinks Name :</h3>
    <input type="text" placeholder='Drinks Name' onChange={(e)=>setDrinkName(e.target.value)} />
    <h3>Drinks Price : </h3>
    <input type="number" placeholder='Drinks Price' onChange={(e)=>setDrinkPrice(e.target.value)} />
    <h3>Drink Category : </h3>
    <input type="text" placeholder='Drinks Category' onChange={(e)=>setDrinkCategory(e.target.value)} />
    <button className='add-drink-btn' onClick={()=>{props.updateDrink(drinkId,newDrink),props.view('drinks')}}>Update Drink</button>
    </div>
        )
    }

 
}

export default UpdateDrink