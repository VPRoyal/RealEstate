import React, { Component, createRef } from 'react'
import { validate } from '../../Functions';
import styles from "./contactbar1.module.css"
export default class contactbar extends Component {
    constructor() {
        super();
        this.state = {
            err: false,
            animate:false
        }
        this.form = createRef();
        this.checks = createRef();
        this.errMessage = ""
    }
    numCheck = (e) => {
        var elem = e.target, val = elem.value
        if (isNaN(val)) {
            val = val.replace(/\D/g, '')
            elem.value = val;
        }

    }
    isEmpty = (handle) => {
        if (handle.value === "") {
            handle.style.outline = "solid 2px red"
            return true
        }
        handle.style.outline = ""
        return false
    }
    check = (handle, typ) => {
        handle.style.outline = ""
        var valid = true, message = '', val = handle.value;
        if (typ === "e") {
            if (!validate("e", val)) {
                handle.style.outline = "solid 2px red"
                message = "Please enter a valid email address !!!"
                valid = false
            }
        }
        else if (typ === "p") {
            if (!validate("p", val)) {
                handle.style.outline = "solid 2px red"
                message = "Please enter a valid phone number !!!"
                valid = false
            }
        }
        else if (typ === "c") {
            var span = handle.nextSibling.firstChild
            span.style.borderColor = "unset"
            if (!handle.checked) {
                span.style.borderColor = "red"
                message = "Please check the required fields !!!"
                valid = false
            }
        }
        this.setState({ err: !valid })
        this.errMessage = message
        return valid
    }
    animate = (e) => {
        var check=e.target.checked
        if(check!==this.state.animate){
            this.setState({animate:check})
        }
    }
    submit = () => {
        const div = this.form.current.children
        const name = div.name.firstChild, email = div.email.firstChild, num = div.num.firstChild, time = div.time.firstChild
        const checks = this.checks.current.children
        const check_1 = checks.check_1.firstChild, check_2 = checks.check_2.firstChild
        // Empty field Check
        var empty = this.isEmpty(name) + this.isEmpty(email) + this.isEmpty(num) + this.isEmpty(time)
        if (empty !== 0) {
            this.setState({ err: true })
            this.errMessage = "Please fill the required fields !!!"
            return;
        }

        // Email & Phone Validation
        if (!this.check(email, "e")) return;
        if (!this.check(num, "p")) return;

        // Checkboxes validation
        var isChecks = this.check(check_1, "c") + this.check(check_2, "c")
        if (isChecks !== 2) return;

    }
    // We have to Create an Error check method for the box
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        return (

            <div className={styles.contact}>
                {/* {console.log([this.state.err, this.errMessage])} */}
                <div className={styles.head} >
                    <h1>Contact the Seller </h1>
                    <input type="checkbox" id={styles.popbut} onChange={(e)=>this.animate(e)} />
                    <label htmlFor={styles.popbut}></label>
                </div>
                <div className={`${styles.body} ${this.state.animate?styles.animate_show:styles.animate_hide}`}>
                    <div className={styles.rows} ref={this.form}  >
                        <div name="name">
                            <input type="text" id="" placeholder="" />
                            <span className={styles["placeholder"]}> Name </span>
                        </div>
                        <div name="num">
                            {/* <span style={{ display: "none" }} className={styles["error-pointer"]}>Name is Incorrect !!!</span> */}
                            <input type="tel" id="" placeholder="" onChange={(e) => { this.numCheck(e) }} />
                            <span className={styles["placeholder"]}>Number</span>
                        </div>
                        <div name="email">
                            <input type="email" id="" placeholder="" />
                            <span className={styles["placeholder"]}>Email</span>
                        </div>
                        <div name="time">
                            <input type="text" id="" placeholder="" />
                            <span className={styles["placeholder"]}>Free time to contact</span>
                        </div>
                    </div>
                    <div className={styles.checks} ref={this.checks} onChange={(e) => { this.check(e.target, "c") }}  >
                        <div name="check_1">
                            <input type="checkbox" name="" id="check1" />
                            <label htmlFor="check1"><span></span><span>By clicking we are ready to look forward by doing it like that Im very happy</span></label>
                        </div>
                        <div name="check_2" >
                            <input type="checkbox" name="" id="check2" />
                            <label htmlFor="check2"><span></span><span>By clicking we are ready to look forward</span></label>
                        </div>
                    </div>
                    <div className={styles["button"]} >
                        <div id={styles.error} >{this.state.err && this.errMessage}</div>
                        <button onClick={() => { this.submit() }} >Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
