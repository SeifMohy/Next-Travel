import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="nav p-2">
        <Link href="/">
          <a className="p-2 font-bold text-blue-700 text-2xl italic">Next Travel</a>
        </Link>
      </div>

      {children}

      <div className="p-3 bg-gray-800 flex ">
        <div className="text-center">
          <Link href="/">
            <a className="font-bold text-blue-700 text-lg ">
              Next Travel
            </a>
          </Link>
          <p className="text-white text-xs font-thin">All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default layout;
