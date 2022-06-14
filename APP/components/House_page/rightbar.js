import React, { Component } from 'react'
import styles from "./rightbar.module.css"
import Contactbar from "./rightbar/contactbar"
export class rightbar extends Component {
    
    render() {
        return (
            <div className={styles["rightbar"]}>
                <Contactbar/>
            </div>
        )
    }
}

export default rightbar
