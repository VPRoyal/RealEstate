import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from "./rightbar.module.css"
import Dashboard from "./dashboard"
import Listing from "./listings"
import Analytics from "../Analytics/analytics"
import Profile from "./Profile/profile"

export default class rightbar extends Component {
    render() {
        return (
            <div className={styles["rightbar"]}>
                <div className={styles["central-box"]} >
                    <div className={styles["heading"]} >
                        {/* <h1><span>Welcome </span><span>to Dashboard</span></h1> */}
                        {/* <h2>Your Bookmarked Pages/</h2> */}
                    </div>
                        <Routes>
                            <Route exact path="/home" element={<Dashboard/>}></Route>
                            <Route exact path="/home/dashboard" element={<Dashboard/>}></Route>
                            <Route exact path="/home/listings" element={<Listing/>}></Route>
                            <Route exact path="/home/analytics" element={<Analytics/>}></Route>
                            <Route exact path="/home/profiles" element={<Profile/>}></Route>
                        </Routes>
                </div>
            </div>
        )
    }
}
