import React from "react";
import { MdOutlineFactCheck } from "react-icons/md";
const NavBar = (props) => (
  <div className="nav-bar">
    <div className="total-tables">
      <span > Total Tables:</span>
      <span> {props.tables.length} </span>
    </div>
    <div className="reserved-tables">
      <span > Reserved Tables : </span>
      <span>{props.reservedTab.length}</span>
    </div>
    <div className="billing-tables">
     <MdOutlineFactCheck size={27} />
     <span> Billings </span>
    </div>
   
  
  </div>
);

export default NavBar;
