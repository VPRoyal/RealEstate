import React, { Component } from 'react'
import styles from "./listings.module.css"
import Slider from "../House_page/slider"

var image=["/pexels-nextvoyage-1481105.jpg","/pexels-curtis-adams-3288102.jpg","/pexels-aleksejs-bergmanis-681335.jpg"]

export default class listings extends Component {
    render() {
        return (
            <div className={styles["listing"]} >
                <div className={styles["headbar"]} >
                    <div className={styles["add-list"]} >
                        <span>Post listing</span>
                        <i id={styles["add"]}></i>
                    </div>
                </div>
                <div className={styles["listing-box"]} >
                    <div className={styles["listing-top"]} >
                        <div><h2>Property ID</h2></div>
                        {/* <div><span>Posted: </span> <span>since 2 weeks</span></div> */}
                        <div>
                        <div><i id={styles["delete"]} ></i><span>Delete</span></div>
                        <div><i id={styles["edit"]} ></i><span>Edit</span></div>
                        </div>
                    </div>
                    <div className={styles["listing-wrap"]} >
                        <div className={styles["img-box"]} >
                            <Slider images={image} />
                        </div>
                        <div className={styles["detail-box"]} >
                            <h1>Kav Housing Networks</h1>
                            <div>
                                <p><span>Price: </span><span> 25 lac</span></p>
                                <p><span>Area: </span><span> 1200 sq.feet</span></p>
                                <p><span>Property Type: </span><span>Flat</span></p>
                            </div>
                            <p><span>Basic Facility:</span><span> 1Bed</span><span> | </span><span>2Bath</span><span> | </span><span>1Hall</span><span> | </span><span>1 Kitchen</span></p>
                            <p><span>Description: </span><span>available </span></p>
                            <p><span>Floormap: </span><span>available </span></p>
                            <p><span>Video Tour: </span><span>available </span></p>
                            <p><span>Posted Date: </span><span>13 Mar 2021</span></p>
                        </div>
                    </div>
                    <div className={styles["list-footer"]} >
                        <div className={styles["icon-button"]} >
                            <span>Analytics</span>
                            <i id={styles["analytics"]}></i>
                        </div>
                        <div className={styles["icon-button"]} >
                            <span>Preview</span>
                            <i id={styles["preview"]}></i>
                        </div>
                        <div className={styles["icon-button"]} >
                            <span>Reviews</span>
                            <i id={styles["review"]}></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
