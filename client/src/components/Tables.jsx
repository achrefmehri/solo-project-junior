import React from "react";

const Tables = (props) => {
  return (
          <> 
          <h3 className="tabs-tit">Tables</h3>
      <div className="tables-container">
       
      {props.tables.map((elem) => {
          return (
          <div key={elem.id} className="table-number" onClick={()=>{props.tableId(elem.tableNum),props.reservedTable(elem.tableNum),props.view('drinks')}}>
            <span>Table </span>
            <span>{elem.tableNum}</span>
          </div>
        );
    })}
    </div>
    </>
  );
};

export default Tables;
