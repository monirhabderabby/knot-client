import DateMomentUtils from "@date-io/moment";
import {
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from "moment";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import FilterCard from "./FilterCard";

const AddTask = ({ refetch }) => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [employeeEmail, setEmployeeEmail] = useState();
    const [employeeName, setEmployeeName] = useState("");
    const [search, setSearch] = useState("");
    const authInfo = useSelector((state) => state.auth);
    console.log(authInfo);

    const users = [
        {
            id: 1,
            name: "Monir Hossain Rabby",
            email: "raj021159@gmail.com",
            img: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/298535184_3335161630078341_50621954687104169_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHbrNDCT5hJroVFCIuhc19Q_FvO6cAZXwn8W87pwBlfCd8T1GY39ygZgFI8DIrW2DZQMxx0uQWGtPyf8En960VD&_nc_ohc=7aOmwVjMxYEAX_LBUx0&_nc_oc=AQld1YKwtzBRn15GmqTEeKz2n5mKB5p2DHbVGLUR12kSQB2P8Me9bSOfIcmjBdnwc4k&_nc_ht=scontent.fdac27-1.fna&oh=00_AT-t96CmSuNxea_qUXVPIxLADJkI7DkTGPZOGogtJg7VOg&oe=62F911FE",
        },
        {
            id: 2,
            name: "Abdullah al habib",
            email: "abdullahalhabib@gmail.com",
            img: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/273613283_2263347400470766_7396777399028024787_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG_LXrxmuVq2ZdQ39VW-rOGs5KO5Pd_rE2zko7k93-sTZGuWhGh3fAyOJrCe9soIRn4OeCUSWTMeGhi1xxJrzPj&_nc_ohc=W3iCnGIypuAAX8mFQXN&_nc_ht=scontent.fdac27-1.fna&oh=00_AT_fWBXWcVMfnSoRDj-3ybOYnv1wY8R35HPKBSkvctpjzw&oe=62FA48FA",
        },
        { id: 3, name: "Mobashirul islam seam", email: "seam@gmail.com" },
        {
            is: 4,
            name: "Rahad Islam",
            email: "rahadislam@gmail.com",
            img: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/293726723_1101309637483830_4648931062459785870_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFlEWuXtWQoqrrwDJZgeU3scMEbPIChgHBwwRs8gKGAcIhBc3isZVL1YExnuFXsudck0wKfKwBtvA_9N8-i7_YF&_nc_ohc=bLuGRnd8GUUAX9rsAT-&_nc_oc=AQl2vEzRq-zqbbh_-kVqZuiFckG24DJx1zphSFt46GaixUndf5hrOPZ93XoFdWw7jv4&_nc_ht=scontent.fdac27-1.fna&oh=00_AT-u0FV60eJ9IcP68AU1V8UF67ZhYwxDs-UTcepV_5WWyg&oe=62FA5F4B",
        },
        { id: 5, name: "Kabbo islam", email: "KabboISlam@gmail.com" },
    ];

    const handleTask = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const employeeEmail = e.target.employeeEmail.value;
        const department = e.target.department.value;
        const taskTitle = e.target.taskTitle.value;
        const taskDescription = e.target.taskDescription.value;
        const deadline = moment(selectedDate).format(
            "DD/MM/YYYY hh:mm a",
            true
        );
        const companyName = authInfo.loggerInfo?.companyName;
        const result = {
            name,
            employeeEmail,
            department,
            taskTitle,
            taskDescription,
            deadline,
            companyName,
        };
        console.log(result);

        //Post data to server
        fetch(
            "https://knot-business-solution-server.herokuapp.com/v1/addNewTask",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(result),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    e.target.reset();
                    refetch();
                    setEmployeeEmail("");
                    setEmployeeName("");
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Task is assigned to ${employeeName}`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    // fetch(
    //     "https://knot-business-solution-server.herokuapp.com/addNewTask",
    //     {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(NewTask),
    //     }
    // )
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
    return (
        <div>
            <form
                className="w-full mx-auto bg-white shadow-gray-300 border shadow-md rounded py-12 px-5 mt-10 md:w-9/12 sm:w-11/12 sm:mx-auto"
                onSubmit={handleTask}
            >
                <div className="flex flex-col lg:flex-row md:gap-5 w-full relative">
                    <div className=" w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none relative flex">
                        <input
                            className="grow bg-transparent py-2 pl-3"
                            type="text"
                            name="name"
                            value={employeeName ? employeeName : search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Name"
                        />
                        <ImCross
                            onClick={() => setEmployeeName("")}
                            className={
                                employeeName
                                    ? "absolute top-3 right-8 text-gray-400 hover:text-black"
                                    : "hidden"
                            }
                        />
                    </div>
                    <div
                        className={`${
                            employeeName ? "hidden" : "absolute"
                        } w-full lg:w-6/12 drop-shadow-xl rounded-md bg-white top-12 ${
                            !search ? "p-0" : "py-2 pl-3"
                        }`}
                    >
                        {users
                            .filter((val) => {
                                if (search === "") {
                                    return;
                                } else if (
                                    val.name
                                        .toLocaleLowerCase()
                                        .includes(search.toLocaleLowerCase())
                                ) {
                                    return val;
                                }
                            })
                            .map((user) => {
                                return (
                                    <FilterCard
                                        user={user}
                                        setEmployeeEmail={setEmployeeEmail}
                                        setEmployeeName={setEmployeeName}
                                    />
                                );
                            })}
                    </div>
                    <input
                        className="py-2 pl-3 w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                        type="text"
                        name="employeeEmail"
                        value={employeeEmail}
                        placeholder="Employee email"
                        disabled
                    />
                </div>
                <div className="flex flex-col lg:flex-row md:gap-5 w-full">
                    <select
                        name="department"
                        id=""
                        className="py-2 pl-3 w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    >
                        <option value="sales">Sales</option>
                        <option value="marketing">Marketing</option>
                        <option value="finance">Finance</option>
                        <option value="admin">Admin</option>
                    </select>
                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                        <KeyboardDateTimePicker
                            className="py-2 pl-3 w-full lg:w-6/12 my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                            label="Pick a Deadline"
                            variant="inline"
                            ampm={true}
                            disablePast
                            format="yyyy/MM/dd HH:mm"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <input
                    className="py-2 pl-3 w-full  my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    type="text"
                    name="taskTitle"
                    placeholder="Task Title"
                />
                <textarea
                    className="py-2 pl-3 w-full  my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    type="text"
                    name="taskDescription"
                    placeholder="Task Description"
                />

                <input
                    className="flex items-center gap-2 bg-blue-600 py-2 px-6 text-white font-bold rounded  hover:bg-white hover:text-blue-600 hover:outline-1 hover:border hover:border-blue-600 hover: shadow-blue-300 hover: shadow-sm"
                    type="submit"
                    value="ADD TASK"
                />
            </form>
        </div>
    );
};

export default AddTask;
