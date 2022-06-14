import React from "react"
import styles from "./house.module.css"
import Slider from "./slider"
import Title from "./title"
import Leftbar from "./leftbar"
import Rightbar from "./rightbar"
export default class House extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const {data}=this.props
        return (
            <div>
                <Slider images={data.images} />
                <Title rate={this.props.data["Rate"]} />
                <div className={styles["details"]}>
                        <Leftbar/>
                        <Rightbar/>
                </div>
            </div>
        )
    }
}