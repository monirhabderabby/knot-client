import React from "react";

const Loader = ({ children }) => {
    return (
        <div className="flex items-center justify-center w-full min-h-screen space-x-2 animate-bounce">
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
            <div className="w-8 h-8 bg-black rounded-full"></div>
        </div>
    );
};

export default Loader;
