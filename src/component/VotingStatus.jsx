// import React, { useContext, useState, useEffect } from "react";
// import { WalletContext } from "../component/Wallet";

// const VotingStatus = () => {
//     const { contract } = useContext(WalletContext);
//     const [voteStatus, setVoteStatus] = useState("");

//     useEffect(() => {
//         const getVoteStatus = async () => {
//             try {
//                 if (contract) {
//                     const voteStatus = await contract.methods.getVoteStatus().call();
//                     setVoteStatus(voteStatus);
//                 }
//             } catch (error) {
//                 console.error("Error fetching vote status:", error);
//                 // Handle error here, e.g., show an error message to the user
//             }
//         };

//         getVoteStatus();
//     }, [contract]);

//     return (
//         <div>Voting Status: {voteStatus}</div>
//     );
// };

// export default VotingStatus;

import React from 'react'

const VotingStatus = () => {
  return (
    <div>VotingStatus</div>
  )
}

export default VotingStatus
