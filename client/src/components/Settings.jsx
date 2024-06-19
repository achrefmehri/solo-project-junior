import React,{useState} from "react";
import AddDrink from './AddDrink.jsx'
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
                <span>Update Drink</span>
              </div>
              <div className="delete-drink">
                <span>Delete Drink</span>
              </div>
            </div>
            <div className="tables-setting">
              <div className="add-table">
                <span>Add Table</span>
              </div>
              <div className="update-table">
                <span>Update Table</span>
              </div>
              <div className="delete-table">
                <span>Delete Table</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if(viewDisp==='add-drink'){
        return <AddDrink addDrink={props.addDrink} deleteDrink={props.deleteDrink} view={props.view}/>
    }
            
        
    
    
  
};

export default Settings;
