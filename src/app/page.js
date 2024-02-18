import React from "react";
import "./Home.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="body">
      <div className="section">
        <video src="smoke.mp4" autoPlay muted />
        <h1>
          <span>N</span>
          <span>A</span>
          <span>Z</span>
          <span>M</span>
          <span>U</span>
          <span>L</span>
        </h1>
        <center>
          <div className="mt-10">
            <Link
              href="/love"
              className="inline-block px-4 py-2 bg-yellow-300 text-white rounded transition-colors duration-300 hover:bg-yellow-600"
            >
              Please Click Here
            </Link>
          </div>
        </center>
        <br />
      </div>
    </div>
  );
};

export default HomePage;
