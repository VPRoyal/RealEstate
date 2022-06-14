import React, { Component } from 'react'
import styles from "./analytics.module.css"
import Cirbar from "../Others/CirBar"
import Select from "../Others/CustomSelect"
import PieChart from '../Others/PieChart'
import LineChart from "../Others/LineChart"
import { color } from '../Functions'
import List from "./list"
export default class analytics extends Component {
    render() {
        return (
            <div className={styles.wrapper} >
                <div className={styles.wrap} >
                    <div className={styles.rect}>
                        <div><h1><span>Total Listings</span><span>(till Today)</span></h1></div>
                        <PieChart label={pie1.label} data={pie1.data} color={color} config={pie1.config} />
                    </div>
                    <div className={styles.rect}>
                        <div><h1><span>Total views</span><span>(Today)</span></h1></div>
                        <PieChart label={pie2.label} data={pie2.data} color={color} config={pie2.config} />
                    </div>
                    <div className={styles.rect}>
                        <div><h1><span>Customers</span><span>(Contacted Today)</span></h1></div>
                        <PieChart label={pie3.label} data={pie3.data} color={color} config={pie3.config} />
                    </div>
                </div>
                <div className={styles.chart} >
                    <div className={styles.CHead} >
                        <h3>Total Views Statistics</h3>
                        <div className={styles.select} >
                            <Select data={["Yearly View", "Monthly View"]} default="Yearly View"/>
                        </div>
                        <div className={styles.select} >
                        <Select data={["2019"]} default="2019"/>
                        </div>
                    </div>
                    <LineChart data={line.data} label={line.Xlabel} color={color} axis={line.axis} />
                </div>
                <div className={styles.chart} >
                    <div className={styles.CHead} >
                        <h3>Total Customers contacted</h3>
                        <div className={styles.select} >
                            <Select data={["Yearly View", "Monthly View"]} default="Yearly View"/>
                        </div>
                        <div className={styles.select} >
                        <Select data={["2019"]} default="2019"/>
                        </div>
                    </div>
                    <LineChart data={line.data} label={line.Xlabel} color={color} axis={line.axis} />
                </div>
                <div className={styles.list} >
                <h3>Specific List Analysis</h3>

                <List/>
                <List/>
                <List/>
                <List/>
                <List/>

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
const line = {
    // Xlabel: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV"],
    Xlabel:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    axis: { x: "Months", y: "Total Views" },
    data: [
        {
            title: "2019",
            val: [60, 49, 67, 67, 200, 200, 49, 49, 49, 40, 249,60, 49, 67, 67, 200, 200, 49, 49, 230, 40, 249,60, 49, 67, 67, 200, 200, 49, 49, 49],
            max: 249, min: 49
        },
         {
             title: "2020",
             val: [60, 123, 46, 89, 58, 120, 45, 90, 29, 40, 43],
             max: 123, min: 23
         },
        // {
        //     title: "2021",
        //     val: [60, 90, 19, 56, 89, 120, 125, 112, 48, 40, 56],
        //     max: 125, min: 19
        // }
    ]

}
{/* <Cirbar percent={90} color={{ bar: "var(--blue)", text: "var(--blue)", numb: "#e5e5e5" }} /> */ }

