import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PartnerDetails = () => {
    const [partnerList, setPartnerList] = useState([]);

    const { partnerName, contactNumber, address, email, UpdateInvest, _id } =
        partnerList;
        const loggerInfo = useSelector((state) => state.auth.loggerInfo);
        const { companyName } = loggerInfo;
    
        useEffect(() => {
            fetch(`http://localhost:5000/partner/${companyName}`)
                .then((res) => res.json())
                .then((data) => setPartnerList(data.reverse()));
        }, [partnerList, companyName]);
    
        // console.log(partnerList, companyName);

    return (
        <div>
            <div>
                <h2 className="text-base font-semibold">Partner List</h2>
                <table class="shadow-2xl border-2 border-cyan-300 min-w-1/2 mx-auto my-8 text-base overflow-hidden">
                    <thead className="text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th className="py-3 text-left px-6 pl-10 whitespace-nowrap">
                                Name
                            </th>
                            <th className="py-3 text-left px-6 whitespace-nowrap">
                                Contact Number
                            </th>
                            <th className="py-3 text-left px-6 pr-10 whitespace-nowrap">
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {partnerList.map((partner) => (
                            <tr
                                key={partner._id}
                                className="hover:shadow-md hover:bg-cyan-100 hover:scale-105 duration-500 cursor-pointer border-b border-cyan-100"
                            >
                                <td className="py-3 px-6 pl-10 whitespace-nowrap">
                                    {partner.partnerName}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap text-center">
                                    {partner.contactNumber}
                                </td>
                                <td className="py-3 px-6 whitespace-nowrap text-center">
                                    {partner.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PartnerDetails;
