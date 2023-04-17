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
        let loginInputs = Array.from(document.querySelectorAll('.inputs'));
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
        loginpassword :'',
        rememberme : false
    })

    function handleLoginInputsChange(e) {
        setLoginDetails({
            ...loginDetails, [e.target.name] : e.target.value
        })
    }

    function loginFormSubmit(e) {
        e.preventDefault();
        // Login API Intergration Pending...
    }

    // Sign Up Details
    const [signupDetails, setSignUpDetails] = useState({
      signupusername: "",
      signupemail: "",
      signupmobile: "",
      signuppassword : ""
    });

    function handleSignUpInputsChange(e) {
        setSignUpDetails({
            ...signupDetails, [e.target.name] : e.target.value
        })
    }

    function signUpFormSubmit(e) {
        e.preventDefault();
        // User Register API Integration Pending...
    }

    function clearInputs() {

        setLoginDetails({
          loginemail: "", loginpassword: "", rememberme: false,
        });

        setSignUpDetails({
          signupusername: "", signupemail: "", signupmobile: "", signuppassword: "",
        });
    }

    return (
      <Context.Provider value={{ handleInputFocus, handleInputBlur, loginDetails, handleLoginInputsChange, loginFormSubmit, signupDetails, handleSignUpInputsChange, signUpFormSubmit, clearInputs }}>
        {props.children}
      </Context.Provider>
    );
}

export default State;