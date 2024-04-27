import React, { useState, useEffect, createContext } from 'react';
import Web3 from 'web3';
import PropTypes from 'prop-types';
import ABI from '../component/ABI.json';

// Create and export the context outside the component

//0x1D5Eb22BAE90f2Ab84066947CFF13577b675cdf8
const WalletContext = createContext();

const Wallet = ({ children }) => {
  const [state, setState] = useState({
    web3: null,
    contract: null
  });

  useEffect(() => {
    const init = async () => {
      const web3 = new Web3('HTTP://127.0.0.1:7545');
      const contractAddress = "0xcf1a782d7889304786f1a29B896D41d9e96990F8";
      const contract = new web3.eth.Contract(ABI, contractAddress);
      setState({ web3: web3, contract: contract });
    };
    init();
  }, []);

  return (
    <WalletContext.Provider value={state}>
      {children}
    </WalletContext.Provider>
  );
};

Wallet.propTypes = {
  children: PropTypes.node.isRequired,
};

export { WalletContext }; // Export the context separately

export default Wallet;
