import React from "react";
import { Link } from "react-router-dom";
const Registration = () => {
    return (
      <Link to="/register">
        <div className="flex justify-center">
          <button className="text-white p-2 font-semibold bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer m-4">
            Register For Event
          </button>
        </div>
      </Link>
    );
}
export default Registration;