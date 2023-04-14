import React, { useState } from "react";
import Context from "./Context";

const State = (props) => {

    
    function handleInputFocus(e) {
        e.preventDefault();
        let inputgiven = e.target.dataset.inputgiven;
        let allLabelDivs = Array.from(document.querySelectorAll('.labelInputDiv'));
        allLabelDivs.forEach((labelDiv) => {
            if (labelDiv.dataset.inputfor === inputgiven) {
                labelDiv.classList.add('activeLabel');
            }
        })
    }
    
    function handleInputBlur(e) {
        let allLabelDivs = Array.from(document.querySelectorAll('.labelInputDiv'));
        let loginInputs = Array.from(document.querySelectorAll('.loginInputs'));
        allLabelDivs.forEach((labelDiv) => {
           loginInputs.forEach((loginIn) => {
            if (loginIn.dataset.inputgiven === labelDiv.dataset.inputfor) {
                if (!loginIn.value) {
                    labelDiv.classList.remove('activeLabel');
                }
            }
           })    
        })
       
    }

    // Login Details
    const [loginDetails, setLoginDetails] = useState({
        loginemail : '',
        loginpassword :''
    })

    function handleLoginInputsChange(e) {
        setLoginDetails({
            ...loginDetails, [e.target.name] : e.target.value
        })
    }

    function loginFormSubmit(e) {
        e.preventDefault();
    }

    return (
      <Context.Provider value={{ handleInputFocus, handleInputBlur, loginDetails, handleLoginInputsChange, loginFormSubmit }}>
        {props.children}
      </Context.Provider>
    );
}

export default State;