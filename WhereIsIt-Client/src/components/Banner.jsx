import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center w-4/4 lg:w-3/4 mx-auto mt-10">
        WhereIsIt: Helping You Find Lost Items and Return Found Ones!
      </h1>
      <p className="text-lg lg:text-xl text-gray-500 mb-6 text-center w-4/4 lg:w-3/4 mx-auto">
        WhereIsIt is a platform where you can find lost items and return found
        ones. If you’ve lost something or found something, you can get help
        here. Join us in helping each other reunite with lost possessions!
      </p>
      <Carousel></Carousel>
      
    </div>
  );
};

export default Banner;
