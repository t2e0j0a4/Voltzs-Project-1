import React from 'react'

// Assets
import dummy from "../Assets/Videos/dummy.mp4";
import Pic2 from "../Assets/Images/Pic2.png";

// React Router
import { Link } from 'react-router-dom';

// Features Constant
import features from "../Constants/Features";

const Home = () => {
  return (
    <div className='max-w-[100%] min-h-[100vh] bg-[#000]'>

        <div className="home w-[1200px] max-w-[98%] mx-auto bg-[#000]">

            {/* Hero Section */}
            <div className="hero w-[100%] flex flex-col md:flex-row justify-center md:justify-between items-center gap-[1.6rem] min-h-[100vh] py-2 px-2 md:py-2 md:px-3">

                <div className="flex flex-col justify-center items-center w-[100%] md:w-[45%] gap-[2.4rem] py-4 px-1">
                    <img src={Pic2} alt="Hero" className='w-[400px] object-contain'/>
                    <Link to="/login" className='heroButton'>Get Started</Link>
                </div>

                <div className=" w-[100%] md:w-[55%] h-[100%]">
                    <video src={dummy} autoPlay muted loop className='w-[100%] h-[100%] object-cover'></video>
                </div>

            </div>
        
        </div>

        <div className='w-[100%] bg-[#fff]'>

            {/* About Section */}
            <div className="about relative w-[1200px] mx-auto max-w-[98%] min-h-[100vh] z-[1] flex flex-col md:flex-row justify-center items-center px-4 py-4 gap-[2rem]">

                {/* <div className="background absolute w-[100%] h-[100%] top-0 left-0 z-[0]">
                    <img src={Pic3} alt="Background" className='w-[100%] h-[100%] object-cover'/>
                </div> */}

                <div className=" w-[100%] md:w-[60%] h-[100%] relative z-[10] order-2 md:order-1">
                    <video src={dummy} autoPlay muted loop className='w-[100%] h-[100%] object-cover rounded-[20px]'></video>
                </div>

                <div className="content relative z-[10] w-[100%] md:w-[40%] order-1 md:order-2">
                    <h2 className='text-left text-[#404040] text-[2.4rem] font-[700]'>About Us</h2>
                    <p className='text-left text-[#343434] font-[400] text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </div>

            {/* Fetures Section */}
            <div className="features w-[100%] min-h-[100vh]">

                <div className="featuresOuterBox w-[100%] h-[100%]">

                    <div className="featuresHeading py-4 w-[100%] flex justify-center items-center">
                        <h2 className='font-[700] text-[3rem] text-[#515151]'>Features</h2>
                    </div>

                    <div className="featuresInBox w-[1200px] max-w-[98%] min-h-[90vh] mx-auto px-4 pt-16 pb-4">

                        {
                            features.map((each) => {
                                return (
                                    <div key={each.id} className={`feature feature-${each.id}`}>
                                        <img src={each.image} alt={each.text} className=''/>
                                        {
                                            each.options && <div className='counter'>1</div>
                                        }
                                        <Link to={`/features/${each.link}`} className='referLink'>{each.text}</Link>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Home