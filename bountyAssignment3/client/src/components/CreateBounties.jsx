import React, { useState } from "react";

export default function(props){

// reset inputs
const initInputs = { 
    firstName: "",
    lastName: "",
    alive: true,
    bountyPrice: 0,
    type: "", 
}
// input state
const [inputs, setInputs] = useState(initInputs)


// handle change for all inputs
function handleChange(e) {
    const {name, value,  type, checked } = e.target;

    if (type === "checkbox") {
      setInputs((prev) => ({ ...prev, [name]: checked }));
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  }
//submit and update fake DB and state
function handleSubmit(e){
    e.preventDefault()
    console.log(inputs)
    props.submit(inputs, props._id)
    setInputs(initInputs)
}
return(
    <div className="form-container-container">
    <form onSubmit={handleSubmit} className="form-container">
        <input type="text" 
        name="firstName" 
        value={inputs.firstName} 
        onChange={handleChange}
         placeholder="first name"
         className="form-container-inputs"
         />
        
        
        <input type="text" 
        name="lastName" 
        value={inputs.lastName} 
        onChange={handleChange} 
        placeholder="Last name" 
        className="form-container-inputs"/>


        <input type="number" 
        name="bountyPrice" 
        value={inputs.bountyPrice} 
        onChange={handleChange} 
        placeholder="Price" 
        className="form-container-inputs"/>
        
        <span className="alive-txt"> Alive? </span>
        <input
            type="checkbox"
            name="alive"
            checked={inputs.alive}
            onChange={handleChange} 
            className="form-container-check"/>


        <select
            name="type"
            value={inputs.type}
            onChange={handleChange}
            className="form-container-inputs"
          >
            <option value="">Select Faction</option>
            <option value="jedi">Jedi</option>
            <option value="sith">Sith</option>
          </select>
          <button className="form-container-inputs">{props.btnTxt}</button>
    </form>
    </div>
)

}