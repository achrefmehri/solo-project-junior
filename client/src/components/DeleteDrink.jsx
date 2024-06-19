import React from 'react'
import { TiDelete } from "react-icons/ti";

const DeleteDrink = (props) => {
    console.log(props.drinks);
  return (
    <>
    <h3 className='delete-drinks-disp'>Delete Drink</h3>
    <br></br>
    <div className="drinks-container">
     {props.drinks.map((elem) => {
            return (
            <div key={elem.id} className="drink-item" >
                <TiDelete  className='delete-icon' size={20} onClick={()=>{props.deleteDrink(elem.id),props.view('drinks')}}/>
              <span>{elem.name}</span>
              <span>{elem.price} TND</span>
            </div>
          );
      })}
    </div>
    </>
  )
}

export default DeleteDrink