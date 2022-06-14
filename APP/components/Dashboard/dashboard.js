import React, { Component } from 'react'
import styles from "./dashboard.module.css"
import Hcard from "../Hbox/Hcard"
import Test from "../Test"
export class Dashboard extends Component {
    render() {
        return (
            <div className={styles["dashboard"]} >
                <Test/>
            </div>
        )
    }
}
export default Dashboard
