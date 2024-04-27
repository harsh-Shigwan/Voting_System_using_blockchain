import { useState } from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import Navigation from "./Navigation";
import { WalletContext } from "./Wallet";
import { Link } from "react-router-dom";


const Vote = ({ account }) => { 
  const {  contract } = useContext(WalletContext);
  // console.log(contract);
  // console.log(web3);

  const submitVote = async (event) => {
    event.preventDefault();
    const condidateId = document.querySelector("#candidateId").value;
    const voterId = document.querySelector("#voterId").value;
 
    try{
      await contract.methods.vote(condidateId ,voterId).send({
        from: account,
        gas: "1000000",
      });
      alert("you have vote successful");
    }
    catch(error){
      console.log(error)
      
    }
   
  };

  return (
    <div>
      <Navigation></Navigation>
      <form onSubmit={submitVote}>
        <label htmlFor="name">Voter Id:</label>
        <input type="text" id="voterId"></input>

        <label htmlFor="party">Candidate Id:</label>
        <input type="text" id="candidateId"></input>

    
        <button type="submit">Voter</button>
      </form>
    
    </div>
  );
}

Vote.propTypes = {
  account: PropTypes.node.isRequired,
};

export default Vote;
