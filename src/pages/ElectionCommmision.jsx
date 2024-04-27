import React, { useState, useContext } from 'react'
import Navigation from '../component/Navigation'
import PropTypes from "prop-types";
import { WalletContext } from "../component/Wallet";

const ElectionCommmision = ({ account }) => {
  const [Winner, setWinner] = useState("Winner is not announced Yet");
  const { contract } = useContext(WalletContext);

  const votingTime = async (event) => {
    event.preventDefault();
    const startTime = document.querySelector("#start").value;
    const endTime = document.querySelector("#end").value;
    try {
      await contract.methods.voteTime(startTime, endTime).send({ from: account, gas: 480000 })

      alert("voting start");
    } catch (error) {
      console.error(error);
    }
  }

  const emergency = async () => {
    try {
      await contract.methods.emergency(startTime, endTime).send({ from: account, gas: 480000 })

      alert("voting emergency");
    } catch (error) {
      console.error(error);
    }
  }

  const Result = async () => {
    try {
      await contract.methods.result().send({ from: account, gas: 480000 })
      const winnerCandidate = await contract.methods.winner().call();
      setWinner(winnerCandidate)
      alert("result out");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Navigation />
      <h2>Winner is : {Winner}</h2>
      <form onSubmit={votingTime}>
        <label htmlFor="start">start time:</label>
        <input type="text" id="start" />

        <label htmlFor="end">end time:</label>
        <input type="text" id="end" />

        <button type="submit">voting start</button>
      </form>
      <div className=' space'>
        <button className='emerBtn' onClick={emergency}>Emergency</button>
        <button className='resBtn' onClick={Result}>Result</button>
      </div>
    </div>
  )
}

ElectionCommmision.propTypes = {
  account: PropTypes.node.isRequired,
};

export default ElectionCommmision;
