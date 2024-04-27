import React, { useEffect ,useContext, useState } from 'react'
import { WalletContext } from "./Wallet";
import Navigation from './Navigation'
const VoterDisplay = () => {
  const {  contract } = useContext(WalletContext);
  const [ voters , setVoters] = useState([]);
  useEffect(()=>{
    const voterInfo = async () => {
      const condidates = await contract.methods.voterList().call();
      setVoters(condidates);
    
    }
    contract && voterInfo();
     
  
  },[ contract])
  return (
    <div>{voters.map((voter)=>{
      return (
        <ul key={voter.voterId}>
        <li>{voter.name}</li>
        <li>{voter.age}</li>
        <li>{voter.gender}</li>
        </ul>
      )
    })}</div>
  )
  }
export default VoterDisplay