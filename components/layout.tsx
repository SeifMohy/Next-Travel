import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="nav p-5">
        <Link href="/">
          <a className="p-5 font-bold text-blue-400 text-2xl ">Next Travel</a>
        </Link>
      </div>

      {children}

      <div className="p-6 bg-gray-800 flex">
        <div className="w-1/2 ">
          <Link href="/">
            <a className="font-bold text-blue-400 text-xl">
              Next Travel
            </a>
          </Link>
        </div>
        <div className="w-1/2">
          <p className="text-white text-lg">all rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default layout;
