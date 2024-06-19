import React,{useState} from "react";
import AddDrink from './AddDrink.jsx'
import DeleteDrink from "./DeleteDrink.jsx";
import UpdateDrink from "./UpdateDrink.jsx";
import AddTable from './AddTable.jsx'
const Settings = (props) => {
    const [viewDisp,setViewDips]=useState('')
if(viewDisp===''){
    return (
        <div className="settings-container">
          <h3>Settings</h3>
          <div className="crud-sett">
            <div className="drinks-setting">
              <div className="add-drink" >
                <span onClick={()=>setViewDips('add-drink')}>Add Drink</span>
              </div>
              <div className="update-drink">
                <span onClick={()=>setViewDips('update-drink')}>Update Drink</span>
              </div>
              <div className="delete-drink">
                <span onClick={()=>setViewDips('delete-drink')}>Delete Drink</span>
              </div>
            </div>
            <div className="tables-setting">
              <div className="add-table">
                <span onClick={()=>setViewDips('add-table')}>Add Table</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if(viewDisp==='add-drink'){
        return <AddDrink addDrink={props.addDrink} deleteDrink={props.deleteDrink} view={props.view}/>
    }
    else if(viewDisp==='delete-drink'){
        return <DeleteDrink drinks={props.drinks} deleteDrink={props.deleteDrink} view={props.view}/>
    } 
    else if(viewDisp==='update-drink'){
        return <UpdateDrink drinks={props.drinks} updateDrink={props.updateDrink} view={props.view}/>
    } 
    else if(viewDisp==='add-table'){
      return <AddTable addtable={props.addtable} view={props.view}/>
  } 
     
            
        
    
    
  
};

export default Settings;
