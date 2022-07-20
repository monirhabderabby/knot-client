import React from "react";
import { Link } from "react-router-dom";

const FeaturedApp = () => {
    return (
        <div className="px-0 md:px-8 lg:px-12">
            <p className="my-3 tracking-widest text-gray-400 text-sm">
                FEATURED APPS
            </p>
            <section className="grid w-[100%] mx-auto md:w-[80%] grid-cols-1 md:grid-cols-2 items-center bg-cyan-100 md:bg-gradient-to-r from-cyan-300 via-white to-white rounded-md">
                <div className="text-center md:text-left w-[100%] md:w-[60%] px-4 mx-auto my-10 md:my-0">
                    <h3 className="font-semibold text-xl my-2">
                        Complete CRM Platform
                    </h3>
                    <p className="my-4 mb-8">
                        End-to-end, fully customizable CRM solution for growing
                        business and enterprises
                    </p>
                    <Link
                        to="/learnMore"
                        className="bg-red-500 text-white font-semibold px-4 py-2 hover:bg-red-400"
                    >
                        LEARN MORE
                    </Link>
                </div>
                <div className="text-start">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="text-center sm:border-t-[1px] md:border-t-[0px] md:border-r-[1px] md:border-b-[1px] py-12 border-gray-200 w-[100%] mx-auto">
                            <h3>Mail</h3>
                            <p className="mb-4">Secure Business email</p>
                            <Link
                                to="/learnMore"
                                className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-semibold px-2 lg:px-4 py-2 hover:text-white hover:bg-sky-400 transform  duration-[.7s] transition-all"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                        <div className="text-center  md:border-b-[1px] py-12 border-gray-200">
                            <h3>Mail</h3>
                            <p className="mb-4">Secure Business email</p>
                            <Link
                                to="/learnMore"
                                className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-semibold px-2 lg:px-4 py-2 hover:text-white hover:bg-sky-400 transform  duration-[.7s] transition-all"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                        <div className="text-center border-r-[1px] py-12 border-gray-200">
                            <h3>Mail</h3>
                            <p className="mb-4">Secure Business email</p>
                            <Link
                                to="/learnMore"
                                className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-semibold px-2 lg:px-4 py-2 hover:text-white hover:bg-sky-400 transform  duration-[.7s] transition-all"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                        <div className="text-center py-12 border-gray-200">
                            <h3>Mail</h3>
                            <p className="mb-4">Secure Business email</p>
                            <Link
                                to="/learnMore"
                                className="bg-transparent border-[1px] border-sky-400 text-sky-400 font-semibold px-2 lg:px-4 py-2 hover:text-white hover:bg-sky-400 transform  duration-[.7s] transition-all"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedApp;