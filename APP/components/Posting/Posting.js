import React, { Component } from 'react'
import styles from "./posting.module.css"
import Topbar from "../Dashboard/topbar"
import Progress from "./progress"
import Postdata from "./postdata"
var max_move = 3
export default class posting extends Component {
    constructor() {
        super();
        this.state = {
            current_move: 0,
            move_btn: null,
            next_butn: "Next"
        }
        this.movenext = this.movenext.bind(this)
        this.moveback = this.moveback.bind(this)
        console.log("constructor")
    }
    movenext() {
        if (this.state.current_move === max_move) {
            this.setState({ move_btn: "submit" })
        }
        else {
            this.setState({ current_move: this.state.current_move + 1, move_btn: "next" })
        }
        if (this.state.current_move < max_move-1 && this.state.next_butn != "Next") {
            this.setState({ next_butn: "Next" })
        }
        else if (this.state.current_move === max_move - 1 && this.state.next_butn != "Submit") {
            this.setState({ next_butn: "Submit" })
        }
        console.log(this.state.current_move)
        console.log("movenext")
    }
    moveback() {
        if (this.state.current_move == 0) {
            //code will be written over here for work
        }
        else {
            this.setState({ current_move: this.state.current_move - 1, move_btn: "back" })
        }
        if (this.state.current_move< max_move && this.state.next_butn!="Next") {
            this.setState({ next_butn: "Next" })
            console.log('running')
        }
        console.log(max_move)
        console.log("moveback")
        console.log(this.state.current_move)

    }
    render() {
        return (
            <div>
                <Topbar />
                <div className={styles["container"]} >
                    <div className={styles["leftside"]}   >
                        <Progress current_step={this.state.current_move + 1} move_btn={this.state.move_btn} />
                        <div className={styles["button-box"]} >
                            <button onClick={() => { this.moveback() }} >Back</button>
                            <button onClick={() => { this.movenext() }} >{this.state.next_butn}</button>
                        </div>
                        <Postdata current_step={this.state.current_move} />
                    </div>
{/*--------> Rightside will be used for information of left componenets. Will be used later on */}
                    <div className={styles["rightside"]}  >

                    </div>
                </div>
            </div>
        )
    }
}
