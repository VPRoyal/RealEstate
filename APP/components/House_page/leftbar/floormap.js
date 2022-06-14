import React, { Component } from 'react'
import styles from "./floormap.module.css"
export default class floormap extends Component {
    render() {
        return (
            <div className={styles["floormap"]}>
                <h2>Floormap</h2>
                <div><span><a>Request a Floormap</a></span></div>
                <div>
                    <img src="/houses/pexels-maria-orlova-4946904.jpg" alt="" />
                    <img src="/houses/pexels-maria-orlova-4946904.jpg" alt="" />
                    <img src="/houses/pexels-maria-orlova-4946904.jpg" alt="" />
                    <img src="/houses/pexels-maria-orlova-4946904.jpg" alt="" />
                </div>
            </div>
        )
    }
}
