import React, { useState } from "react";
import { MdOutlineFactCheck } from "react-icons/md";
const NavBar = (props) => {
  const reservedTab = [... new Set (props.reservedTab)]

  return (
    <div className="nav-bar">
    <div className="total-tables">
      <span > Total Tables:</span>
      <span> {props.tables.length} </span>
    </div>
    <div className="reserved-tables" onClick={()=>props.view('reservedTab')}> 
      <span > Reserved Tables : </span>
      <span >{reservedTab.length}</span>
    </div>
    <div className="billing-tables" onClick={()=>props.view('billingDisp')}>
     <MdOutlineFactCheck size={27} />
     <span> Billings </span>
    </div>
  </div>
  )
}


export default NavBar;
