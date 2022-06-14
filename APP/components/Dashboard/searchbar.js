import React, { Component } from 'react'
import styles from "./searchbar.module.css"
export default class searchbar extends Component {
    render() {
        return (
            <div className={styles["searchbar"]} >
                    <div className={styles["inptbar"]}>
                        <input type="text" name="" id="" placeholder="Search here..."/>
                        <i id={styles["clearbtn"]}></i>
                        <i id={styles["srchbtn"]}></i>
                    </div>
                    <div className={styles["suggstn-box"]} style={{display: "none"}}>
                        <ul>
                            <li>
                                <a href=""><span>Kalwar</span><span>PIN: 302012</span></a>
                            </li>
                            <li>
                                <a href=""><span>Kalwar</span><span>PIN: 302012</span></a>
                            </li>
                            <li>
                                <a href=""><span>Kalwar</span><span>PIN: 302012</span></a>
                            </li>
                            <li>
                                <a href=""><span>Kalwar</span><span>PIN: 302012</span></a>
                            </li>
                            <li>
                                <a href=""><span>Kalwar</span><span>PIN: 302012</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}
