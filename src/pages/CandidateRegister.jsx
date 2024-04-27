import { useState } from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import Navigation from "../component/Navigation";
import { WalletContext } from "../component/Wallet";
import { Link } from "react-router-dom";
import CandidatesDisplay from "../component/CandidateDisplay";

function CandidateRegister({ account }) {
  const {  contract } = useContext(WalletContext);
  // console.log(contract);
  // console.log(web3);

  const candidateRegistration = async (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const party = document.querySelector("#party").value;
    const age = document.querySelector("#age").value;
    const gender = document.querySelector("#gender").value;
    try{
      await contract.methods.candidateRegister(name, party, age, gender).send({
        from: account,
        gas: "1000000",
      });
      alert("Registration successful");
    }
    catch(error){
      alert("Registration failed");
    }
   
  };

  return (
    <div>
      <Navigation></Navigation>
      <form onSubmit={candidateRegistration}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"></input>

        <label htmlFor="party">Party:</label>
        <input type="text" id="party"></input>

        <label htmlFor="age">Age:</label>
        <input type="text" id="age"></input>

        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender"></input>
        <button type="submit">Register</button>
      </form>
      <CandidatesDisplay></CandidatesDisplay>
    </div>
  );
}

CandidateRegister.propTypes = {
  account: PropTypes.node.isRequired,
};

export default CandidateRegister;
