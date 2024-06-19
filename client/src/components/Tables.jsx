import React from "react";

const Tables = (props) => {
  return (
          <> 
          <h3 className="tabs-tit">Tables</h3>
      <div className="tables-container">
       
      {props.tables.map((elem) => {
          return (
          <div key={elem.id} className="table-number" onClick={()=>{props.selectedTable(elem.tableNum),props.reservedTable()}}>
            <span>Table:</span>
            <span>{elem.tableNum}</span>
          </div>
        );
    })}
    </div>
    </>
  );
};

export default Tables;
