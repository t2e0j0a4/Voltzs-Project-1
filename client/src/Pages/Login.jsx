import React , {useContext, useEffect} from 'react';

// React Router
import {Link} from "react-router-dom";

// Context API
import Context from "../Context/Context";

// Components
import SideBanner from '../Components/SideBanner'
import { FiArrowLeft } from 'react-icons/fi';

const Login = () => {

  useEffect(() => {
    document.title = 'Document | Login';
  }, [])

  const makeContext = useContext(Context);
  const { handleInputFocus, handleInputBlur, loginFormSubmit, handleLoginInputsChange, loginDetails, clearInputs } = makeContext;

  return (
    <div className="w-[100%] max-w-[100%] min-h-[100vh] flex flex-row justify-between mx-auto items-start bg-[#f6f6f6]">
      {/* Login Side */}

      <div className="w-[100%] 2xl:w-[30%] loginSection h-[100vh] py-6 px-4 relative bg-[#f6f6f6] flex justify-center items-center">

        {/* Back Page Arrow */}

        <div className={`goBackPage w-[40px] h-[40px] rounded-[50%] flex justify-center items-center absolute top-[20px] left-[30px]`}>
          <Link to="/">
            <FiArrowLeft fontSize="28px" fontWeight="800" color="#fff" />
          </Link>
        </div>

        {/* Login Form Beggining */}

        <form
          onSubmit={(e) => {
            loginFormSubmit(e);
          }}
          className="bg-[#ffffff] w-[400px] lg:w-[80%] xl:w-[70%] 2xl:w-[75%] flex flex-col justify-center items-center rounded-[12px] mt-[3rem] gap-[2rem] py-[2rem] px-[1rem] sm:px-[0.6rem] md:px-[1rem]"
        >
          <h2 className="loginHeadings pageSectionHeadings">Login</h2>

          {/* Email - Login */}
          <div className="inputGroup loginEmailInputGroup">
            <div data-inputfor="labelemail" className="labelInputDiv">
              <label htmlFor="loginEmail">Email</label>
            </div>
            <input
              required
              type="email"
              name="loginemail"
              id="loginEmail"
              className="inputs"
              value={loginDetails.loginemail}
              onChange={(e) => {
                handleLoginInputsChange(e);
              }}
              data-inputgiven="labelemail"
              onFocus={function (e) {
                handleInputFocus(e);
              }}
              onBlur={function (e) {
                handleInputBlur(e);
              }}
            />
          </div>

          {/* Password - Login */}
          <div className="inputGroup loginPasswordInputGroup">
            <div data-inputfor="labelpassword" className="labelInputDiv">
              <label htmlFor="loginPassword">Password</label>
            </div>
            <input
              required
              type="password"
              name="loginpassword"
              value={loginDetails.loginpassword}
              onChange={(e) => {
                handleLoginInputsChange(e);
              }}
              id="loginPassword"
              className="inputs"
              data-inputgiven="labelpassword"
              onFocus={function (e) {
                handleInputFocus(e);
              }}
              onBlur={function (e) {
                handleInputBlur(e);
              }}
            />
          </div>

          {/* Options - Login */}
          <div className="loginOptions">
            <div className="checkboxOption rememberMeOption">
              <input
                type="checkbox"
                name="rememberMe"
                id="loginRememberMe"
                value={loginDetails.rememberme}
                onChange={(e) => {
                  handleLoginInputsChange(e);
                }}
              />
              <label htmlFor="loginRememberMe">Remember Me</label>
            </div>
            <Link to="/forgotpassword" className="hover:underline">
              Forgot Password ?
            </Link>
          </div>

          <div className="accountInOptions">
            <button type="submit" className="">
              Login
            </button>
            <button
              type="button"
              className="buttonWrapper"
              onClick={() => {
                clearInputs();
              }}
            >
              <Link to="/register" className="linkingButton">
                Sign Up
              </Link>
            </button>
          </div>
        </form>

        {/* Login Form Ends */}
      </div>

      {/* Login Page Side Banner */}

      <SideBanner />
    </div>
  );
}

export default Login