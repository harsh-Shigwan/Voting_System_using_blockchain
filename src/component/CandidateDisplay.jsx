import React, { useEffect ,useContext, useState } from 'react'
import { WalletContext } from "./Wallet";
import Navigation from './Navigation'
const CandidateDisplay = () => {
  const {  contract } = useContext(WalletContext);
  const [ candidates , setCandidates] = useState([]);
  useEffect(()=>{
    const candidateInfo = async () => {
      const condidates = await contract.methods.candidateList().call();
      setCandidates(condidates);
    
    }
    contract && candidateInfo();
     
  
  },[ contract])
  return (
    <div>{candidates.map((candidate)=>{
      return (
        <ul key={candidate.party}>
        <li>{candidate.name}</li>
        <li>{candidate.party}</li>
        <li>{candidate.votes}</li>
        </ul>
      )
    })}</div>
  )
  }
export default CandidateDisplay