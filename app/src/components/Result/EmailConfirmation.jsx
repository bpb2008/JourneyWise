import React from 'react'
import './emailConfirmation-custom.css'

const EmailConfirmation = () => {
  return (
    <div id="confirmationcontainer" className="emailConfirmation-custom">
      <img src="journeywise-icon-checkmark.svg" /> 
      <h3>We've Sent Your Results</h3>
      <p>We've sent the PDF of your results to the email you provided. Make sure to keep your results in a safe spot so that you can review them before any upcoming opportunities!</p>
    </div>
  ) 
}

export default EmailConfirmation 