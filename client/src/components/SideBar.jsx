import React from "react";
import { BsTable } from "react-icons/bs";
import { FiCoffee } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
const SideBar = (props) => {
  return (
    <div className="side-bar">
      <div className="side-bar-logo">
        <img className="logo-img" src="../src/img/logo2.png" height={100}></img>
      </div>
      <div className="side-bar-menu">
        <div className="tables" onClick={()=>props.view('tables')}>
        <BsTable size={24}  />
          <span className="tables-span">Tables</span>
        </div>
        <div className="drinks" onClick={()=>props.view('drinks')}>
        <FiCoffee size={24} />
          <span className="drinks-span">Drinks</span>
        </div>
        <div className="settings" onClick={()=>props.view('settings')}>
        <MdOutlineSettings size={24} />
          <span className="settings-span">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
