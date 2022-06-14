import React, { Component } from 'react'
import styles from "../Analytics/dynamic.module.css"
import PieChart from '../Others/PieChart'
import { color } from '../Functions'
export default class DynamicList extends Component {


    render() {
        return (
            <div className={styles.wrapper} >
                <div className={styles.wrap} >
                    <div className={styles.rect}>
                        <div><h1><span>Total views</span><span>(Today)</span></h1></div>
                        <PieChart label={pie2.label} data={pie2.data} color={color} config={pie2.config} />
                    </div>
                    <div className={styles.rect}>
                        <div><h1><span>Total clicks</span><span>(Today)</span></h1></div>
                        <PieChart label={pie2.label} data={pie2.data} color={color} config={pie2.config} />
                    </div>

                    <div className={styles.rect}>
                        <div><h1><span>Total bookmarks</span><span>(Today)</span></h1></div>
                        <PieChart label={pie3.label} data={pie3.data} color={color} config={pie3.config} />
                    </div>
                </div>
                <div className={styles.contact} >
                    <h3>Total contacts</h3>
                    <div className={styles.contBar}>
                        <div className={styles.card} >
                            <div>
                                <span>Name :</span>
                                <span>Mob :</span>
                                <span>Email :</span>
                                <span>Free Time :</span>
                            </div>
                            <div>
                                <span>Vinay Pratap Singh</span>
                                <span>9833246823</span>
                                <span>777vinaypratap@gmail.com</span>
                                <span>4:4Pm</span>
                            </div>
                        </div>
                        <div className={styles.card} >
                            <div>
                                <span>Name :</span>
                                <span>Mob :</span>
                                <span>Email :</span>
                                <span>Free Time :</span>
                            </div>
                            <div>
                                <span>Vinay Pratap Singh</span>
                                <span>9833246823</span>
                                <span>777vinaypratap@gmail.com</span>
                                <span>4:4Pm</span>
                            </div>
                        </div>
                        <div className={styles.card} >
                            <div>
                                <span>Name :</span>
                                <span>Mob :</span>
                                <span>Email :</span>
                                <span>Free Time :</span>
                            </div>
                            <div>
                                <span>Vinay Pratap Singh</span>
                                <span>9833246823</span>
                                <span>777vinaypratap@gmail.com</span>
                                <span>4:4Pm</span>
                            </div>
                        </div>
                        <div className={styles.card} >
                            <div>
                                <span>Name :</span>
                                <span>Mob :</span>
                                <span>Email :</span>
                                <span>Free Time :</span>
                            </div>
                            <div>
                                <span>Vinay Pratap Singh</span>
                                <span>9833246823</span>
                                <span>777vinaypratap@gmail.com</span>
                                <span>4:4Pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const pie1 = {
    label: ["Sell", "Rent", "PG"],
    data: [
        {
            title: "2020",
            val: [20, 30, 50, 40, 35]
        }
    ],
    config: {
        dough: true,
        label: false
    }
}
const pie2 = {
    label: ["Views"],
    data: [
        {
            title: "Date",
            val: [100]
        }
    ],
    config: {
        dough: true,
        label: false
    }
}
const pie3 = {
    label: ["Views"],
    data: [
        {
            title: "Date",
            val: [100]
        }
    ],
    config: {
        dough: true,
        label: false
    }
}