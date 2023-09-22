import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Start({}) {
  return (
    <header className="bg-blue-400 text-white p-8 h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-4 flex items-center">
        <h1 className="text-4xl font-semibold font-serif">
          Eduardo Yair Hernández Escobedo
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
          alt="Twitter Logo"
          className="w-10 h-10 ml-3"
        />
      </div>
      <p className="text-lg font-mono w-2/3">
        👋 Hello, I'm Eduardo Escobedo, a 17-year-old programmer with a passion
        for creating and coding. I've had the opportunity to collaborate on
        various projects and am currently immersed in exciting new ones. If
        you'd like to learn more about me, simply click the button below.
      </p>
      <div className="mt-4">
        <button className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800">
          <Link href="/home">More about me</Link>
        </button>
      </div>
    </header>
  );
}

export default Start;
