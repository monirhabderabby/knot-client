import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Warming = () => {
    const [warnings, setWarnings] = useState([]);
    const [trainings, setTrainings] = useState([]);
    const loggerInfo = useSelector((state) => state.auth.loggerInfo);

    useEffect(() => {
        fetch(`http://localhost:5000/userWarnings/${loggerInfo.email}`)
            .then((res) => res.json())
            .then((data) => setWarnings(data.reverse()));
    }, [warnings, loggerInfo]);

    useEffect(() => {
        fetch("http://localhost:5000/Trainnig")
            .then((res) => res.json())
            .then((data) => setTrainings(data.reverse()));
    }, []);

    return (
        <div className="m-10">
            <div className="overflow-x-auto">
                <h1 className="text-2xl text-red-500 font-bold my-6">
                    Warning Database
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {warnings?.slice(0, 20).map((warning) => (
                        <div className="px-4 py-2 w-80 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <p className="my-2 font-semibold">
                                    {warning.name}
                                </p>
                                <label for={warning._id}>
                                    <span className="modal-button underline text-red-500 hover:font-medium">
                                        Details
                                    </span>
                                </label>
                                <input
                                    type="checkbox"
                                    id={warning._id}
                                    className="modal-toggle"
                                />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">
                                            Warning Information!
                                        </h3>
                                        <p>Name : {warning.name}</p>
                                        <p>Email : {warning.warningFor}</p>
                                        <p>Date : {warning.warningDate}</p>
                                        <p>Reason : {warning.warningReason}</p>
                                        <p>Warning Type : {warning.type}</p>
                                        <p>Feedback : {warning.infeed}</p>
                                        <div className="modal-action">
                                            <label
                                                for={warning._id}
                                                className="flex ml-5 items-center gap-2 bg-red-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-red-400 hover:outline-1 hover:border hover:border-red-400 hover: shadow-red-200 hover: shadow-sm"
                                            >
                                                Close!
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Type : {warning.type}</p>
                            <p>Topic : {warning.name}</p>
                            <p className="card-actions justify-end text-gray-400">
                                {warning.warningDate}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold my-6">Training Details</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {trainings?.slice(0, 20).map((training) => (
                        <div className="px-4 py-2 w-80 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <p className="my-2 font-semibold">
                                    {training.Applicant_Name}
                                </p>
                                <label for={training._id}>
                                    <span className="modal-button underline hover:font-medium">
                                        Details
                                    </span>
                                </label>
                                <input
                                    type="checkbox"
                                    id={training._id}
                                    className="modal-toggle"
                                />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">
                                            Award Information!
                                        </h3>
                                        <p>Name : {training.Applicant_Name}</p>
                                        <p>
                                            Depertment : {training.Depertment}
                                        </p>
                                        <p>
                                            Duration :{" "}
                                            {training.Tranning_Duration}
                                        </p>
                                        <p>
                                            Designation : {training.Designation}
                                        </p>
                                        <p>
                                            Location :{" "}
                                            {training.Taining_Location}
                                        </p>
                                        <p>
                                            Start Time : {training.Start_Time}
                                        </p>
                                        <p>End Time : {training.End_Time}</p>
                                        <p>Topic : {training.name}</p>
                                        <p>
                                            Contact Number :{" "}
                                            {training.Contact_Number}
                                        </p>
                                        <div className="modal-action">
                                            <label
                                                for={training._id}
                                                className="flex ml-5 items-center gap-2 bg-red-400 py-2 px-4 text-white font-bold rounded  hover:bg-white hover:text-red-400 hover:outline-1 hover:border hover:border-red-400 hover: shadow-red-200 hover: shadow-sm"
                                            >
                                                Close!
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>{training.Depertment} Dept.</p>
                            <p>topic : {training.name}</p>
                            <p className="card-actions justify-end text-gray-400">
                                {training.Tranning_Duration}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Warming;
