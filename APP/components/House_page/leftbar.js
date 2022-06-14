import React, { Component } from 'react'
import styles from "./house.module.css"
import Basic from "./leftbar/basic"
import Facility from "./leftbar/facility"
import Floor from "./leftbar/floormap"
import Videotour from "./leftbar/videotour"
import About from "./leftbar/about"
export class leftbar extends Component {
    render() {
        return (
            <div className={styles["leftbar"]}>
                <Basic/>
                <Facility/>
                <Floor/>
                <Videotour/>
                <About/>
            </div>
        )
    }
}

export default leftbar
