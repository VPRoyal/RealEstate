import { Component, createRef } from 'react'
import styles from './accounts.module.css'
import { validate } from '../Functions';
export default class login extends Component {
    constructor() {
        super();
        this.state = {
            isSending: false,
            message: null
        }
        this.email = createRef();
        this.pass = createRef();

    }
    signin = async (e) => {
        this.setState({ isSending: true })
        var email = this.email.current, pass = this.pass.current;
        var isValid = validate('e',email.value);

        if (!email.value || !pass.value || !isValid) {
            this.setState({ message:!isValid?'Incorrect email address !':'Fill required fields !' })
            email.style.borderColor = !email.value || !isValid ? 'red' : '';
            pass.style.borderColor = !pass.value && isValid ? 'red' : '';
        }
        else {
            const res= await fetch(`http://localhost:5000/profiles/?email=${email.value}&pass=${pass.value}&t=auth`)
            const data = await res.json()
            if(!data.auth){
                this.setState({message:data.message})
            }
        }
        this.setState({ isSending: false })
    }
    keycheck = (e) => {
        if(e.target.tagName!=='INPUT') return;
        if (e.key === 'Enter') {
            this.signin();
        }
        else if (this.state.message) {
            this.setState({ message: null });
            this.email.current.style.borderColor = '';
            this.pass.current.style.borderColor = '';
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
            <div className={`${styles['box']} ${styles['login']}`} >
                <div className={styles.head} >
                    <div className={styles.logo} ><img src="/Logo (Complete).svg" alt="" /></div>
                    <h1>Sign In</h1>
                    <hr />
                </div>
                <div className={styles.body} >
                    <div name="email">
                        <svg width="25" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                        </svg>
                        <input ref={this.email} type="email" name="email" id="" placeholder="Email" />
                    </div>
                    <div name="password">
                        <svg width="25" height="25" fill="currentColor" className="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                        </svg>
                        <input ref={this.pass} type="password" name="password" id="pwd" placeholder="Password" autoComplete="off" />
                    </div>
                </div>
                <div className={styles.footer}>
                    <button onClick={(e) => { this.signin(e) }} >{this.state.isSending ? 'Signing...' : 'Sign In'}</button>
                    <a href=""><span>Forgot Password?</span></a>
                    <span style={{ display: this.state.message ? 'inline' : 'none' }} id={styles.message} >{this.state.message}</span>
                </div>
            </div>
        )
    }
}
