import React, { useState } from 'react'

const Drinks = (props) => {
  const [category,setCategory]=useState('')
  const coffee = props.drinks.filter((elem)=>{
    return elem.category === 'coffee'
  })
  const soda = props.drinks.filter((elem)=>{
    return elem.category === 'soda'
  })
  if(category===''){
    return (
      <div className="select-category">
        <h3>Select Category</h3>
        <div className="category-choose">

        <span onClick={()=>setCategory('coffee')}>Coffee</span>
        <span onClick={()=>setCategory('soda')}>Soda</span>
        </div>
      </div>
    )
  }
  else if(category==='coffee'){
    return (
      <> 
      <div className="select-category">
        <h3>Select Category</h3>
        <div className="category-choose">

        <span onClick={()=>setCategory('coffee')}>Coffee</span>
        <span onClick={()=>setCategory('soda')}>Soda</span>
        </div>
      </div>
            <h3 className="drinks-tit">Coffee</h3>
        <div className="drinks-container">
         
        {coffee.map((elem) => {
            return (
            <div key={elem.id} className="drink-item" onClick={()=>{props.billingItems(elem)}}>
              <span>{elem.name}</span>
              <span>{elem.price} TND</span>
            </div>
          );
      })}
      </div>
      </>
    )
  }
  else if(category==='soda'){
    return (
      <> 
      <div className="select-category">
        <h3>Select Category</h3>
        <div className="category-choose">

        <span onClick={()=>setCategory('coffee')}>Coffee</span>
        <span onClick={()=>setCategory('soda')}>Soda</span>
        </div>
      </div>
            <h3 className="drinks-tit">Soda</h3>
        <div className="drinks-container">
         
        {soda.map((elem) => {
            return (
            <div className="drink-item" key={elem.id} onClick={()=>{props.billingItems(elem),props.billings()}}>
              <span>{elem.name}</span>
              <span>{elem.price} TND</span>
            </div>
          );
      })}
      </div>
      </>
    )
  }
}

export default Drinks