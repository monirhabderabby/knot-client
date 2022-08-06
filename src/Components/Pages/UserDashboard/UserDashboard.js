import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserNavbar from '../../Shared/UserNavbar/UserNavbar';
import { BiPlus } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { FaSave } from 'react-icons/fa';
import { toast } from 'react-toastify';
import LeaveModal from './LeaveModal';
import { AiOutlineEye } from "react-icons/ai";

const UserDashboard = () => {
    const { register, handleSubmit, reset } = useForm();
    const [leave, setleave] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setleave(data))
    }, []);
    const onSubmit = data => {

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    reset();
                    toast.success("Add succesfully")
                }
            })
    };

    // const detailsButton = le => {
    //     console.log(le._id)
    //     return <div id="my-modal-6" class="modal-toggle">
    //         <input type="checkbox" />
    //         <div class="modal modal-bottom sm:modal-middle">
    //             <div class="modal-box">
    //                 <h3 class="font-bold text-lg">Leave Request Info</h3>
    //                 <p>Date : {le.Date}</p>
    //                 <p>Employee Name : {le.Name}</p>
    //                 <p>Employee Id : {le.id}</p>
    //                 <p>Department  : {le.dep}</p>
    //                 <p>Designation : {le.Designation}</p>
    //                 <p>Reason For Leave : {le.leave}</p>
    //                 <p>Start Date : {le.s_date}</p>
    //                 <p>End Date : {le.e_date}</p>
    //                 <div class="modal-action">
    //                     <label for="my-modal-6" class="btn">Close!</label>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // }

    return (
        <div>
            <UserNavbar></UserNavbar>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <label for="my-drawer" class="btn btn-xs bg-[#0182be] mt-5 ml-3 md:ml-5 drawer-button border-none">
                        <span><BiPlus></BiPlus></span>
                        <span className='capitalize'> New</span>
                    </label>
                    <h1 className='text-[#0182be] ml-3 my-3 text-xl'>Leave Request :</h1>
                    <div className='ml-3 '>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-2'>
                                {/* ff */}
                                <div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Date:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Date")}
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Employees Name:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Name")}
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Employees ID:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("id")}
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Designation:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("Designation")}
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Reason For Leave:</span>
                                        </label>
                                        <textarea
                                            type="text"
                                            className=" w-64 h-20 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("leave")}
                                        />
                                    </div>
                                </div>
                                {/* ff */}
                                <div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Depertment Name:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("dep")}
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Start Date:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("s_date")}
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">End Date:</span>
                                        </label>
                                        <input
                                            type="text"
                                            className=" w-42 h-8 pl-5 rounded-lg border-solid border border-[#0182be] "
                                            {...register("e_date")}
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <label className="label w-48">
                                            <span className="label-text text-xl">Type Of Leave:</span>
                                        </label>
                                        <div className='mt-5'>
                                            <input {...register("leave_type")} type="radio" value="Casual leave" />
                                            <span className='px-3  text-xl'>Casual leave</span>
                                            <br />
                                            <input {...register("leave_type")} type="radio" value="Sick leave" />
                                            <span className='px-3  text-xl'>Sick leave</span>
                                            <br />
                                            <input {...register("leave_type")} type="radio" value="Annual leave" />
                                            <span className='px-3  text-xl'>Annual leave</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center bg-[#EEEEEE]  w-24 p-2 rounded-lg mx-auto border-solid border border-[#0182be] mt-5'>
                                <FaSave></FaSave>
                                <input className='pl-2 font-medium' type="submit" />
                            </div>
                        </form>
                    </div>
                    <div className='px-5'>
                        <h1 className='text-2xl text-center font-bold my-5'>Request Status</h1>
                        <div class="overflow-x-auto">
                            <table class="table table-compact w-full">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>View Details</th>
                                        <th>Approval Status <br />(HR) </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        leave.map(le =>
                                            <tr>
                                                <th>{le.Date}</th>
                                                <td>{le.id}</td>
                                                <td>{le.Name}</td>
                                                <td>{le.dep}</td>
                                                <td>
                                                    {/* <LeaveModal le={le}></LeaveModal> */}
                                                    <div>
                                                        <label className='' for="my-modal-6" ><AiOutlineEye></AiOutlineEye></label>
                                                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                                        <div class="modal modal-bottom sm:modal-middle">
                                                            <div class="modal-box">
                                                                <h3 class="font-bold text-lg">Leave Request Info</h3>
                                                                <p>Date : {le.Date}</p>
                                                                <p>Employee Name : {le.Name}</p>
                                                                <p>Employee Id : {le.id}</p>
                                                                <p>Department  : {le.dep}</p>
                                                                <p>Designation : {le.Designation}</p>
                                                                <p>Reason For Leave : {le.leave}</p>
                                                                <p>Start Date : {le.s_date}</p>
                                                                <p>End Date : {le.e_date}</p>
                                                                <div class="modal-action">
                                                                    <label for="my-modal-6" class="btn">Close!</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>APPROVAL</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-52 text-base-content gray">
                        <li><Link className='' to="/userdashboard">
                            Leave Request</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;