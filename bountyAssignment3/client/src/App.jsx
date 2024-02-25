import { useState, useEffect } from 'react'
import axios from "axios"
import Bounties from './components/Bounties'
 import CreateBounties from'./components/CreateBounties'

function App() {

//state data and button toggle
  const [bountyList, setBountyList] = useState([])
  const [editToggle, setEditToggle] = useState(false);

//get
function getBounties () {
  axios.get("/api/bountyBoard")
  .then(res => setBountyList(res.data))
  .catch(err => console.log(err))
}
//post
function addBounty (newBounty){
  axios.post("/api/bountyBoard", newBounty)
  .then(res => {
    setBountyList(prev => [...prev, res.data])
  })
  .catch(err => console.log(err))
}
//delete
function deleteBounty(_id){
  axios.delete(`/api/bountyBoard/${_id}`)
  .then(res => {
    setBountyList (prev => prev.filter(bounty => bounty._id !== _id)  )
  })
  .catch(err => console.log(err))
}
//put
function editBounty (update , _id ){
  axios.put(`/api/bountyBoard/${_id}`, update)
  .then(res => {
    setBountyList(prev => prev.map(bounty => bounty._id !== _id ? bounty : res.data))
  } )
  .catch(err => console.log(err))
}
//get all once
useEffect(getBounties,[])

  return (
    <>
    <h1 className='title'>Bane's bounty board</h1>
{!editToggle ? ( <button onClick={() => setEditToggle((prevToggle) => !prevToggle)} className='submit-bounty-button'>
    submit bounty?
  </button>
     ) : (<> 
     <CreateBounties 
    submit={addBounty} 
    btnTxt="Submit Bounty" 
    />
    <button onClick={() => setEditToggle((prevToggle) => !prevToggle)} className='submit-bounty-button'>
    Cancel
  </button> 
  </>)}
   

  <div className="bountyList-container">  
      
    {bountyList.map(bounty =>
      <div className='bountyList'><Bounties 
    submit={addBounty} 
    {...bounty} 
    key ={bounty.firstName} 
    deleteBounty={deleteBounty}
    editBounty={editBounty} />
    </div>)}
    
    </div>
    </>
  )
}

export default App
