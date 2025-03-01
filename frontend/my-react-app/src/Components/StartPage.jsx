import React, { useEffect, useRef } from "react";
import { SignInButton, SignUpButton, SignOutButton  } from "@clerk/clerk-react";

const StartPage = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const spotlight = spotlightRef.current;
      if (spotlight) {
        spotlight.style.left = `${clientX}px`;
        spotlight.style.top = `${clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500 to-cyan-800 rounded-full opacity-20 blur-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{ top: "50%", left: "50%" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden p-8 max-w-2xl w-full transform transition-all duration-500 hover:scale-105">
          {/* Shining Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 opacity-20 animate-shine "></div>

          {/* Content */}
          <div className="relative z-10 text-center ">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 drop-shadow-lg">
              HostStrem.com
            </h1>
            {/* Subtitle */}
            <p className="text-gray-300 text-lg mb-6">
              Timeless design meets modern technology. Experience the perfect
              blend of style and functionality.
            </p>
            {/* Button */}
            <SignInButton
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-gray-100 font-semibold py-3 px-8 rounded-full hover:from-gray-600 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-700/50"
              onClick={handleSignIn}
            >
              Explore More
            </SignInButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
