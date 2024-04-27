
import { useContext , useState , useEffect } from "react";
import PropTypes from "prop-types";
import Navigation from '../component/Navigation'
import { WalletContext } from "../component/Wallet";
import VoterDisplay from "../component/VoterDisplay";
import VotingStatus from "../component/VotingStatus";
import Vote from '../component/Vote.jsx'
import ElectionCommmision from "./ElectionCommmision.jsx";
const VoterRegister = ({account}) => {
  const {  contract } = useContext(WalletContext);
  // console.log(contract);
  // console.log(web3);

  const voterRegistration = async (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const gender = document.querySelector("#gender").value;
    try{
      await contract.methods.voterRegister(name, age, gender).send({
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
    <form onSubmit={voterRegistration}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name"></input>

     

      <label htmlFor="age">Age:</label>
      <input type="text" id="age"></input>

      <label htmlFor="gender">Gender:</label>
      <input type="text" id="gender"></input>
      <button type="submit">Register</button>
    </form>
    <Vote account={account}></Vote>
    <VoterDisplay></VoterDisplay>
    <VotingStatus></VotingStatus>
    
  </div>
  )
}
VoterRegister.propTypes = {
  account: PropTypes.node.isRequired,
};

export default VoterRegister