import React, { useEffect, useState } from 'react';

const Meeting = () => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/meetings')
            .then(res => res.json())
            .then(data => setMeetings(data))
    }, [])
    return (
        <div className='my-5'>
            <h1 className='text-xl mb-3'>Meeting Database</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Meeting Date $ Time</th>
                            <th>Meeting Topic</th>
                            <th>View Details</th>
                            <th>Meeting Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            meetings?.map(meeting =>
                                <tr>
                                    <th>{meeting.date}</th>
                                    <td>{meeting.meetingTopic}</td>
                                    <td>
                                        <div>
                                            <label for="my-modal-6" class="btn modal-button">Details</label>
                                            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                            <div class="modal modal-bottom sm:modal-middle">
                                                <div class="modal-box">
                                                    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                                                    <p>Date : {meeting.date}</p>
                                                    <p>Meeting Topic : {meeting.meetingTopic}</p>
                                                    <p>Meeting Host : {meeting.meetingHost}</p>
                                                    <p>Meeting Guest  : {meeting.meetingGuest}</p>
                                                    <p>Meeting With : {meeting.meetingWith}</p>
                                                    <p>Meeting Link : {meeting.meetingLink}</p>
                                                    <div class="modal-action">
                                                        <label for="my-modal-6" class="btn">Yay!</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td> <a className='bg-[#0182BE] text-white px-4 py-2 rounded' href={meeting.meetingLink} target="_blank" rel="noopener noreferrer">Join Now</a> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Meeting;