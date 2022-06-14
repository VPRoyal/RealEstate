import React, { Component } from 'react'
import styles from "./progress.module.css"
var max_bullet=4, current_bulletin=2
export default class progress extends Component {
    constructor(props){
        super();
        this.state={
            current_bulletin:props.current_step,
            move_dirct:props.move_btn
        }
        this.change=this.change.bind(this);
    }
    change(n){
           if(this.state.move_dirct==="next"){
                if(n===this.state.current_bulletin){
                    return styles["working"]
                }
                else if(n<this.state.current_bulletin){
                    return styles["complete"]
                }
           }
           else if(this.state.move_dirct==="back"){
                if(n===this.state.current_bulletin){
                    return styles["working_rev"]
                }
                else if(n>this.state.current_bulletin){
                    return styles["complete_rev"]
                }
                else if(n<this.state.current_bulletin){
                    return styles["complete"]
                }
           }
           else{
               if(n===1&&this.state.current_bulletin===1){
                   return styles["working"]
               }
           }
    }
   
    componentDidUpdate(prevProps){
        if(this.props.current_step!==prevProps.current_step){
            this.setState({current_bulletin:this.props.current_step, move_dirct:this.props.move_btn})
        }
    }
    render() {
        return (
            <div className={styles["progress"]} >
                <div className={`${styles["bulletin"]} ${this.change(1)} ${this.state.move_dirct===null?styles["first"]:null}`} >
                <span><i className={styles["task-icon"]} ></i></span>
                <span className={styles["linebar"]} ><i className={styles["action-icon"]} ></i></span>
                <span>Details</span>
                </div>

                <div className={`${styles["bulletin"]} ${this.change(2)}`} >
                <span><i className={styles["task-icon"]} ></i></span>
                <span className={styles["linebar"]} ><i className={styles["action-icon"]} ></i></span>
                <span>Description</span>
                </div>

                <div className={`${styles["bulletin"]} ${this.change(3)}`} >
                <span><i className={styles["task-icon"]} ></i></span>
                <span className={styles["linebar"]} ><i className={styles["action-icon"]} ></i></span>
                <span>Facilities</span>
                </div>
                
                <div className={`${styles["bulletin"]} ${this.change(4)} ${this.state.move_dirct==="submit"?styles["last"]:null}`} >
                <span><i className={styles["task-icon"]} ></i></span>
                <span className={styles["linebar"]} ><i className={styles["action-icon"]} ></i></span>
                <span>Graphics</span>
                </div>
            </div>
        )
    }
}
