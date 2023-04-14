import React from 'react'

import Brain from "../Assets/Images/Pic1.svg";

const SideBanner = () => {
  return (
    <div className="w-[100%] 2xl:w-[70%] hidden md:flex items-center justify-center bannerImageBackground h-[100vh]">
      <img src={Brain} alt="Brain" className=" w-[400px] h-[400px] md:w-[98%] object-contain md:object-cover md:h-[100%]" />
    </div>
  );
}

export default SideBanner