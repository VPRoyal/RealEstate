import React from "react"
import Link from "next/link"
import styles from "./hcard.module.css"
export default class Hcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heartbtn: false,
            heartbtnid: styles["heartbtn"],
            arrow_icon: false,
            arrow_iconid: styles["arrow-icon"],
            move:0,
            img_style: null,
        }
         this.maxIndex =0,
         this.index= 0
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
    arrow_icon() {
        if (this.state.arrow_icon === false) {
            this.setState({ arrow_icon: true })
            this.setState({ arrow_iconid: styles["arrow-iconclk"] })
        }
        else {
            this.setState({ arrow_icon: false })
            this.setState({ arrow_iconid: styles["arrow-icon"] })
        }
    }
    move_left() {
        if(this.state.move==0){
            this.index= this.maxIndex 
            this.setState({move:this.maxIndex*(-100)})
        }
        else{
            this.setState({move:this.state.move+100})
            this.index= this.index - 1
        }
    }
    move_right() {
        if(this.state.move==(this.maxIndex)*(-100)){
            this.setState({move:0})
            this.index= 0
        }
        else{
            this.setState({move:this.state.move-100})
            this.index=this.index + 1
        }
    }
    render() {
        var rupee = "₹", dash = "|"
        const {data}=this.props||null
        this.maxIndex=data.images.length-1
        return (
            <div className={styles["Hcard"]} >

                    <div className={styles["img-box"]}>
                        <i onClick={() => { this.heartbtn() }} id={this.state.heartbtnid} ></i>
                        <i onClick={() => { this.move_left() }} id={styles["chevron-left"]}></i>
                        <i onClick={() => { this.move_right() }} id={styles["chevron-right"]}></i>
                        <Link href={`/houses/${data._id}`} target="_blank">
                    <div>
                        {
                            data.images.map((item, index) => {
                                return (
                                    <img key={index} src={item} style={{ transform: `translateX(${this.state.move}%)` }} ></img>
                                )
                            })
                        }
                    </div>
                    </Link>

                    <div>
                        <span>{this.index + 1}</span><span>/</span><span>{this.maxIndex + 1}</span>
                    </div>
                </div>
                    <div>
                    <p><span>{rupee} {data.rate} Lac</span> <span>PIN: 302012</span></p>
                    <p><span>2,500 sqft {dash} 2 Bed {dash} 3 Baths {dash} 2 Kit</span></p>
                    <p>72-A, Durga Vihar, Jhotwara, Jaipur</p>
                </div>
                    <i onClick={() => { this.arrow_icon() }} id={this.state.arrow_iconid} ></i>
                    <div className={styles["slide-box"]} >
                    <p>Description</p>
                    <p>This House is for sale and befitted by my it to no please be cautious.</p>
                </div>
            </div>
        )
    }
}
