import React , {useContext} from 'react'

// Context API
import Context from "../Context/Context";

// Components
import SideBanner from '../Components/SideBanner';

// React Router
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const Register = () => {

  let context = useContext(Context);
  const { handleInputFocus, handleInputBlur, signUpFormSubmit, handleSignUpInputsChange, signupDetails, clearInputs } = context;

  return (
    <div className="w-[100%] max-w-[100%] min-h-[100vh] flex flex-row justify-between mx-auto items-start bg-[#f6f6f6]">

      {/* Login Side */}

      <div className='w-[100%] 2xl:w-[30%] loginSection h-[100vh] py-6 px-4 relative bg-[#f6f6f6] flex justify-center items-center'>

        {/* Back Page Arrow */}

        <div className={`goBackPage w-[40px] h-[40px] rounded-[50%] flex justify-center items-center absolute top-[15px] left-[20px]`}>
          <Link to="/">
            <FiArrowLeft fontSize="28px" fontWeight="800" color="#fff" />
          </Link>
        </div>

        <form onSubmit={(e) => {signUpFormSubmit(e)}} className='bg-[#ffffff] w-[400px] lg:w-[80%] xl:w-[70%] 2xl:w-[75%] flex flex-col justify-center items-center rounded-[12px] mt-[3rem] gap-[1.6rem] py-[1.6rem] px-[1rem] sm:px-[0.6rem] md:px-[1rem]'>

          <h2 className='registerHeadings pageSectionHeadings'>Register</h2>

          {/* Username - Signup */}
          <div className="inputGroup registerUsernameInputGroup">
            <div data-inputfor="signupusername" className="labelInputDiv">
              <label htmlFor="signupUsername">Username</label>
            </div>
            <input required type="text" name="signupusername" id="signupUsername" className='inputs' data-inputgiven="signupusername" value={signupDetails.signupusername} onChange={(e) => {handleSignUpInputsChange(e)}} onFocus={function(e) {handleInputFocus(e)}} onBlur={function(e) {handleInputBlur(e)}}/>
          </div>

          {/* Email - Signup */}
          <div className="inputGroup registerEmailInputGroup">
            <div data-inputfor="signupemail" className="labelInputDiv">
              <label htmlFor="signupEmail">Email</label>
            </div>
            <input required type="email" name="signupemail" id="signupEmail" className='inputs' data-inputgiven="signupemail" value={signupDetails.signupemail} onChange={(e) => {handleSignUpInputsChange(e)}} onFocus={function(e) {handleInputFocus(e)}} onBlur={function(e) {handleInputBlur(e)}}/>
          </div>

          {/* Mobile Number - Signup */}
          <div className="inputGroup registerMobileInputGroup">
            <div data-inputfor="signupmobile" className="labelInputDiv">
              <label htmlFor="signupMobile">Mobile Number</label>
            </div>
            <input required type="text" name="signupmobile" id="signupMobile" className='inputs' data-inputgiven="signupmobile" value={signupDetails.signupmobile} onChange={(e) => {handleSignUpInputsChange(e)}} onFocus={function(e) {handleInputFocus(e)}} onBlur={function(e) {handleInputBlur(e)}}/>
          </div>

          {/* Password - Signup */}
          <div className="inputGroup registerPasswordInputGroup">
            <div data-inputfor="signuppassword" className="labelInputDiv">
              <label htmlFor="signupPassword">Password</label>
            </div>
            <input required type="password" name="signuppassword" id="signupPassword" className='inputs' data-inputgiven="signuppassword" value={signupDetails.signuppassword} onChange={(e) => {handleSignUpInputsChange(e)}} onFocus={function(e) {handleInputFocus(e)}} onBlur={function(e) {handleInputBlur(e)}}/>
          </div>

          <div className="accountInOptions">
            <button type='submit'>Sign Up</button>
            <button type='button' className="buttonWrapper" onClick={() => {clearInputs()}}>
              <Link to='/login' className='linkingButton'>Login</Link>
            </button>
          </div>

        </form>
        
      </div>

      {/* Banner Side */}
      <SideBanner/>

    </div>
  );
}

export default Register