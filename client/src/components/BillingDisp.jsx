import React from 'react'

const BillingDisp = (props) => {
    console.log(props);
  return (
    <div className='bill-disp'>
      {props.billings.map((elem)=>{
        return (
            <div className="bill-details">
                <h3>Table Number : {elem.tableId}</h3> 
                <h3>Drinks:</h3> 
                <h3>Total:{elem.total} TND</h3>

            </div>
        )
      })}
    </div>
  )
}

export default BillingDisp