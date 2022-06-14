import React, { Component } from 'react'
import styles from "./dashbox.module.css"
import Leftbar from "./leftbar"
import Rightbar from "./rightbar"
import Topbar from "./topbar"
export default class dashbox extends Component {
    render() {
        return (
            <div className={styles["wrapper"]} >
            <Topbar/>
            <div className={styles["container"]}>
                <div className={styles.left} >
                <Leftbar/>
                </div>
                <div className={styles.right} >
                <Rightbar/>
                </div>
            </div>
            </div>
        )
    }
}
