import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styles from "./test.module.css"
import PieChart from "./Others/PieChart"
import LineChart from "./Others/LineChart"
import {color} from './Functions'
import Slider from './House_page/slider'
import DynamicList from './Analytics/DynamicList'
export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            val: "Default",
            icon: {
                display: "inline",
                fill: "var(--blue)"
            }
        }

    }
    colortest(color) {
        var elem = []
        for (var k in color) {
            elem.push(<span key={k} style={{ width: "40px", height: "40px", backgroundColor: color[k], color: 'white' }}>{k}</span>)
        }
        return <div style={{ display: 'flex', flexWrap: "wrap" }} >{elem}</div>
    }
    render() {

        return (
            <div className={styles.test}>
                {/* {this.colortest(color)} */}
                {/* <PieChart label={label} data={data} color={color} config={config} /> */}
                {/* <DynamicList/> */}
                <Slider/>
            </div>

        )
    }
}
const label=["Sell","Rent", "PG","4th", "5th"]
const data=[
    {
        title:"2020",
        val:[20,30,50,40,35]
    }
]
const config={
        dough:true,
        label:false
}