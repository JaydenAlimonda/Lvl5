import { useState } from "react";
import CreateBounties from "./CreateBounties";

export default function Bounties(props) {

// props called
  const { firstName, 
    lastName, 
    bountyPrice, 
    type, alive, 
    deleteBounty, 
    _id,  
    editBounty } = props;



  const [editToggle, setEditToggle] = useState(false);


// boolean to displayable string
  const wantedAlive = function  (){
    if(alive === true){return "wanted Alive!"}
    else {return "wanted Dead!"}
    } 



  return (
    <> 
      {!editToggle ? (
        
        <>
          <h1 className="bountyList-firstName"> First Name: {firstName}</h1>
          <h1 className="bountyList-lastName">Last Name: {lastName}</h1>
          <p className="bountyList-price">price ${bountyPrice}</p>
          <p>{type}</p>
          <p>{wantedAlive()}</p>
          <button onClick={() => deleteBounty(_id)}>X</button>
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Edit
          </button>
       </>
      ) : (
        <div>
          <CreateBounties 
          btnTxt="submit edit" 
          submit={editBounty}
          _id={_id}
      />
          <button className="cancel-edit" onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            cancel
          </button>
        </div>
      )}
    </>
  );
}
