
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/lottie/error.json";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 h-96 ">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className=" py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default Error;
