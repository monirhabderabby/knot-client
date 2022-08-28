import React, { useEffect, useState } from "react";
import access from "../../../Assets/icons/Dashboard/access.svg";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import DigitalClock from "../../Shared/DigitalClock/DigitalClock";
import { useSelector } from "react-redux";

const FinanceNavbar = () => {
    const navigate = useNavigate();
    const loggerInfo = useSelector(state => state.auth.loggerInfo);
    const authInfo = useSelector((state) => state.auth);
    const [userProfile, setuserprofile] = useState("");
    const [userEmail, setUserEmail] = useState("");
    // const { companyLogo } = loggerInfo;
    useEffect(() => {
        if (authInfo.loggerInfo !== null) {
            const { userPhoto, email } = authInfo?.loggerInfo;
            setuserprofile(userPhoto);
            setUserEmail(email);
        }
    }, [authInfo]);
    // sign out handler
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
    };

    return (
        <div className="h-[60px] w-full flex items-center justify-between bg-[#FFFFFF] mb-3 shadow-md">
            <div className="flex items-center w-64 justify-center cursor-pointer">
                <img
                    src={loggerInfo.companyLogo}
                    className="w-6 h-6 mr-2"
                    alt=""
                />
                <span>Finance</span>
            </div>

            <div className=" lg:absolute lg:left-64 hover:bg-custom-cyan-100 p-2 rounded-full duration-500">
                <Link to="/accessApps">
                    <img src={access} className={`w-6`} alt="icon" />
                </Link>
            </div>

            {/*Profile DropDown*/}
            <div className="px-6 flex items-center gap-4">
                <div>
                    <p className="text-xl font-medium">
                        <DigitalClock></DigitalClock>
                    </p>
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabindex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src={`${userProfile
                                    ? userProfile
                                    : "https://placeimg.com/80/80/people"
                                }`} alt="" />
                        </div>
                    </label>
                    <ul
                        tabindex="0"
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <p className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </p>
                        </li>
                        <li>
                            <Link to="/settings/profile">
                                Settings
                            </Link>
                        </li>
                        <li>
                            <p onClick={handleSignOut}>Logout</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FinanceNavbar;
