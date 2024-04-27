import React, { useContext, useEffect } from 'react';
import Navigation from '../component/Navigation';
import { WalletContext } from '../component/Wallet';
import PropTypes from 'prop-types';

const AccountList = ({ saveAccount }) => {
  const { web3 } = useContext(WalletContext);

  useEffect(() => {
    const allAccounts = async () => {
      var select = document.getElementById("selectNumber");
      var options = await web3.eth.getAccounts();

      for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }
    };
    web3 && allAccounts();
  }, [web3]);

  const selectAccount = async () => {
    let selectAccountAddress = document.getElementById("selectNumber").value;
    console.log(selectAccountAddress)
    if (selectAccountAddress && selectAccountAddress !== "choose an account") {
      saveAccount(selectAccountAddress);
    }
    console.log(selectAccountAddress)
  };
  

  return (
    <div>
      <Navigation></Navigation>

      <form className='label0' id='myForm'>
        <label htmlFor=''>chose an account</label>
        <select className='innerBox' id='selectNumber' onChange={selectAccount}>
          <option>choose an account</option>
        </select>
      </form>
      {}
    </div>
  );
};

AccountList.propTypes = {
  saveAccount: PropTypes.func.isRequired, // Assuming saveAccount is a function
};

export default AccountList;
