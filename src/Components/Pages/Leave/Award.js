import React, { useEffect, useState } from "react";

const Award = () => {
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        fetch("https://sheltered-cliffs-60290.herokuapp.com/award")
            .then((res) => res.json())
            .then((data) => setAwards(data.reverse()));
    }, []);

    return (
        <div className="m-10">
            <div class="overflow-x-auto">
                <h1 className='text-2xl text-center font-bold my-5'>Team Member Award Database</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        awards.slice(0, 20).map(award => (
                            <div class="px-4 py-2 w-80 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <p className="my-2 font-semibold">{award.name}</p>
                                <p className="font-semibold">{award.employeeEmail}</p>
                                <p><span className="font-semibold">Title :</span> {award.awardTitle}</p>
                                <p><span className="font-semibold">Message :</span> "{award.successMessage}" </p>
                                <p className="card-actions justify-end text-gray-400 font-semibold">{award.AwardDate}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Award;