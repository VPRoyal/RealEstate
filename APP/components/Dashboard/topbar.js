import React, { Component } from 'react'
import styles from "./topbar.module.css"
import Searchbar from "./searchbar"
export default class topbar extends Component {
    render() {
        return (
            <div className={styles["top"]}>
                <div className={styles["logo"]}>
                    <div>
                        <img src="/Logo (Complete).svg" alt="" />
                    </div>
                </div>
                {/* <Searchbar class={styles["searchbar"]} /> */}
                <div className={styles["postad"]}>
                    <button>Post free Ad</button>
                </div>
                <div className={styles["menu-wrapper"]}>
                    <div className={styles["profile"]}>
                        <div className={styles["pwrapper"]} >
                            <div><img src="/prashant-saini-BeoRcYyVgxE-unsplash.jpg" alt="" /></div>
                            <div><span>VP Singh</span><span>Agent</span></div>
                        </div>
                        <div className={styles["penlarge"]} style={{display:"none"}} >
                            <div><img src="/prashant-saini-BeoRcYyVgxE-unsplash.jpg" alt="" /></div>
                            <div>
                                <div><span>Name:</span><span>Kr VP Singh</span></div>
                                <div><span>Member type:</span><span>Agent</span></div>
                                <div><span>Member since:</span><span>10 Years</span></div>
                                <div><span>Active Listings:</span><span>20</span></div>
                            </div>
                            <div>
                                <a href=""><span>Dashboard</span></a>
                                <a href=""><span>Profile</span></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles["notification"]}>
                        <div><i className={styles["bell"]}></i><span>Alerts</span></div>
                        <div style={{ display: "none" }} >
                            <h4>Notifications</h4>
                            <ul>
                                <li><a href=""><span>Hi</span></a></li>
                                <li><a href=""><span>Hi</span></a></li>
                                <li><a href=""><span>Hi</span></a></li>
                                <li><a href=""><span>Hi</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["logout"]}>
                        <div><i className={styles["signout"]} ></i><span>Logout</span></div>
                    </div>
                </div>

            </div>
        )
    }
}

