import React, { useState } from 'react'

import Wallet from './component/Wallet'
import { createBrowserRouter , Navigate, RouterProvider } from 'react-router-dom'
import CandidateDisplay from './component/CandidateDisplay'
import CandidateRegister from './pages/CandidateRegister'
import ElectionCommmision from './pages/ElectionCommmision'
import VoterRegister from './pages/VoterRegister'
import AccountList from './pages/AccountList'
import ConnectedAccount from './component/ConnectedAccount'
const App = () => {
  const [ account , setAccount ] = useState("")
  const saveAccount = (address)=>{
    setAccount(address)
  }
const router = createBrowserRouter([
  { path:"/" , element:<AccountList saveAccount={saveAccount}/>},
  { path:"/candidate" , element:<CandidateRegister account={account}/>},
  { path:"/voter" , element:<VoterRegister account={account}/>},
  { path:"/election-commsioion" , element:<ElectionCommmision account={account}/>},
  
])


  return(
    <>
   <ConnectedAccount account={account}></ConnectedAccount>
    <Wallet>
    <RouterProvider router={router}/>
    </Wallet>
    </>
  )
}

export default App