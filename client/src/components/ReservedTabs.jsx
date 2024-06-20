import React from 'react'

const ReservedTabs = (props) => {
  console.log(props.reserverdTables);
  return (
    <> 
      <h3 className="tabs-tit">Tables Reserved</h3>
      <div className="tables-container">
       
      {props.reserverdTables.map((elem) => {
          return (
          <div key={elem} className="table-number" >
            <span>Table </span>
            <span>{elem}</span>
          </div>
        );
    })}
    </div>
    </>
  )
}

export default ReservedTabs