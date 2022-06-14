import React, { Component } from 'react'
import styles from "./house.module.css"
var rating=2.1
export class title extends Component {
    constructor(props){
        super(props);
        this.state={
            heartbtn: false,
            heartbtnid: styles["heartbtn"],
            rate:null
        }
    }
    componentDidMount(){
        var percent=Math.round(100*(rating/5))
        this.setState({rate:{
            background:"-webkit-linear-gradient(left, var(--orange) "+percent+"%, rgb(57, 66, 78, 0.9) "+percent+"%)",
            "backgroundClip": "text",
    "WebkitBackgroundClip": "text",
    "WebkitTextFillColor": "transparent"}
        })
    }
    heartbtn() {
        if (this.state.heartbtn === false) {
            this.setState({ heartbtn: true })
            this.setState({ heartbtnid: styles["heartbtnclk"] })
        }
        else {
            this.setState({ heartbtn: false })
            this.setState({ heartbtnid: styles["heartbtn"] })
        }

    }
    render() {
        return (
    
            <div className={styles["post-head"]}>
                    <div>
                        <h2>Kav Housing Networks</h2>
                        <h3><span>{this.props.rate}</span></h3>
                        <h3><span>Posted: </span><span>2 </span><span>minutes ago</span></h3>
                    </div>
                    <div id={styles["ratings"]}>
                        <div className={styles["seller-rating"]}>
                            <div><span>Seller's Rating</span></div>
                            <div>
                                <span className={styles["star"]} style={this.state.rate} >★★★★★</span>
                            </div>
                            <div>
                                <span>{rating}</span>
                                <span>/</span>
                                <span>5</span>
                            </div>
                        </div>
                        <div className={styles["rating-txt"]} >
                            <span>based on </span><span>50 </span><span>customers rating</span>
                        </div>
                    </div>
                    <div>
                        <i onClick={() => { this.heartbtn() }} id={this.state.heartbtnid} ></i>
                    </div>
                </div>
        )
    }
}

export default title
