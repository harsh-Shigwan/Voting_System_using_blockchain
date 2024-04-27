import React from 'react'
import PropTypes from "prop-types";
const ConnectedAccount = ({account}) => {
  return (
    <h4>Connected Account : {account}</h4>
  )
}
ConnectedAccount.propTypes = {
    account: PropTypes.node.isRequired,
  };
  
export default ConnectedAccount