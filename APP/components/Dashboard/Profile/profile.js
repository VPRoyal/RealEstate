import React, { Component } from 'react'
import styles from "./profile.module.css"
import Select from "../../Others/CustomSelect"
export class profile extends Component {
    render() {
        return (
            <div className={styles.profile} >
                <div className={styles.img} >
                    <div><img src="/pexels-nextvoyage-1481105.jpg" alt='Nextvoyage' /></div>
                </div>
                <div className={styles.details} >
                    <div className={styles.head} ><h2>ID WILL COME HERE</h2></div>
                    <div className={styles.body} >
                        <div><span>Name </span><span>Vinay Pratap Singh</span></div>
                        <div><span>Gender </span><span>Male</span></div>
                        <div><span>Age </span><span>21 years</span></div>
                        <div><span>Email </span><span>abc@xyz.com</span></div>
                        <div><span>Phone </span><span>+91 6376301828</span></div>
                        <div><span>Address </span><span>Add ( PIN ), City, State, Country</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default profile
