import React from 'react'
import './Profile.css'
import { useState, useEffect } from 'react'


const Profile = () => {


    const username = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const number = localStorage.getItem("number")

    // useEffect(()=>{
    //     window.location.reload()
    // },[])

    return (
        <div>
            <div className='img-1'>

                <div className="card-1">

                    <div className="img-2">
                        <img className="img-2" src='https://img.freepik.com/free-vector/woman-profile-silhouette_23-2147502125.jpg?uid=R176304562&ga=GA1.1.1707953542.1732684197&semt=ais_hybrid&w=740' />
                    </div>
                    <div className="details">
                        <h2>{username}</h2>
                        <h5>{email}</h5>
                        <h5>{number}</h5>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
