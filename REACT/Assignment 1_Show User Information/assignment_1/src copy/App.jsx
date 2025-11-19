import { useState } from 'react'


function UserInfo() {
    let studentName = "Jay";
    let course = "ReactJS Essentials";
    let sessionTime = "9:30 AM Batch"

    return (
        <>
            <h2>Student Name: {studentName}</h2>
            <h3>Course: {course}</h3>
            <h3>Session Time: {sessionTime}</h3>
        </>
    )
}

export default UserInfo;
