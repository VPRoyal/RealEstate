import React, { Component, createRef } from 'react'
import {Link} from 'react-router-dom'
import styles from './accounts.module.css'
import { validate } from '../Functions';
export default class signup extends Component {

    constructor() {
        super();
        this.state = {
            isSending: false,
            message: null
        }
        this.name = createRef()
        this.email = createRef()
        this.pass = createRef()
        this.num = createRef()
    }
    register = async () => {      // Method after submit form 
        this.setState({ isSending: true })
        var email = this.email.current, name = this.name.current, pass = this.pass.current, num = this.num.current, country = num.previousSibling.children.country;
        var eVal = email.value, nVal = name.value, pVal = pass.value, numVal = num.value, cVal = country.value
        var isEmail = validate("e", eVal), isMobile = validate("p", numVal)
        if (!eVal || !nVal || !pVal || !numVal) {
            this.setState({ message: "Please fill the required fields!" })
            email.style.borderColor = (!eVal && 'red');
            name.style.borderColor = (!nVal && 'red');
            pass.style.borderColor = (!pVal && 'red');
            num.style.borderColor = (!numVal && 'red');
        }
        else if (!isEmail || !isMobile) {      // email - num validation check 
            console.log("hello world")
            this.setState({ message: !isEmail ? "Invalid email address!" : "Invalid phone number!" })
            !isEmail ? email.style.borderColor = 'red' : num.style.borderColor = 'red';
        }
        else {
            const data = {
                data:{
                    name: nVal,
                    email: eVal,
                    mobile: Number(cVal + numVal),
                    pass: pVal
                }
            }
            const res = await fetch('http://localhost:5000/profiles', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
              console.log(res);
        }
        this.setState({ isSending: false })
        }
    keycheck = (e) => {
        var elem = e.target
        if (elem.tagName !== 'INPUT') return;  // Check for Inputs only
        if (e.key === 'Enter') {        //ENTER key check
            this.register();
        }
        else if (this.state.message) {  // Reset warning message
            this.setState({ message: null });
            this.email.current.style.borderColor = '';
            this.pass.current.style.borderColor = '';
            this.num.current.style.borderColor = '';
            this.name.current.style.borderColor = '';
        }
        var name = elem.name, val = elem.value
        if (name === "number" && !/^[0-9]+$/.test(val)) {               // Number verification and setting
            this.setState({ message: "Please enter a number!" })
            elem.value = val.replace(/\D/g, '');;
            elem.style.borderColor = 'red'
        }
    }
    componentDidMount() {
        addEventListener('keyup', this.keycheck);
    }
    componentWillUnmount() {
        removeEventListener('keyup', this.keycheck);
    }
    render() {
        return (
            <div className={styles.box}  >
                <div className={styles.head} >
                    <div className={styles.logo} ><img src="/Logo (Complete).svg" alt="" /></div>
                    <h1>Sign Up</h1>
                    <hr />
                </div>
                <div className={styles.body}>
                    <div name="name"  >
                        <svg width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <input type="text" name="name" id="" placeholder="Name" ref={this.name} />
                    </div>
                    <div name="email">
                        <svg width="25" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                        </svg>
                        <input type="email" name="email" id="" placeholder="Email" ref={this.email} />
                    </div>
                    <div name="number" id={styles.num} >
                        <svg width="25" height="25" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                        <label >
                            <select name="country">
                                <option data-countrycode="IN" value="91" defaultValue>IND (+91)</option>
                                <option data-countrycode="US" value="1">USA (+1)</option>
                            </select>
                        </label>
                        <input type="tel" name="number" id="" placeholder="Mobile Number" ref={this.num} />
                    </div>
                    <div name="password">
                        <svg width="25" height="25" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                        </svg>
                        <input type="password" name="password" id="pwd" placeholder="Password" autoComplete="off" ref={this.pass} />
                    </div>
                </div>
                <div className={styles.footer} >
                    <button onClick={this.register} >Sign Up</button>
                    <Link to='/account/signin' ><span>Have an account? Sign In</span></Link>
                    <span style={{ display: this.state.message ? 'inline' : 'none' }} id={styles.message} >{this.state.message}</span>
                </div>
            </div>
        )
    }
}

