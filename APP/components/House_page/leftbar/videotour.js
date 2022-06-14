import React, { Component } from 'react'
import styles from "./video.module.css"
export default class videotour extends Component {
    render() {
        return (
            <div>
                <div className={styles["vdeo-tur"]}>
                            <h2>Video tour</h2>
                            <div><span><a href="">Request a video tour</a></span></div>
                            <div><iframe height="350" width="600" src="https://www.youtube.com/embed/F6m0ghjadlw">
                            </iframe></div>
                        </div>
            </div>
        )
    }
}
