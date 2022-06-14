import { Component, createRef } from 'react'
import { Link,Routes, Route, withRouter} from 'react-router-dom'
import styles from './accounts.module.css'
import Login from './login'
import Signup from './signup'
export default class Accounts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opt: null
        }
        this.box = createRef();
    }
    action = async (e)=> {
        var Btxt = e.target.innerHTML
        if (Btxt == "Sign In") {
            var email = this.box.current.children.email.children.email.value
            var pass = this.box.current.children.password.children.password.value
            const res= await fetch(`http://localhost:5000/profiles/?email=${email}&pass=${pass}&t=auth`)
            const data = await res.json()
        }
        else if(Btxt == "Sign Up"){
            var name=this.box.current.children.name.children.name.value
            var email = this.box.current.children.email.children.email.value
            var pass = this.box.current.children.password.children.password.value
            var mobile=this.box.current.children.number.children.number.value
            var data={
                'data':[
                    {
                        'name':name,
                        'email':email,
                        'mobile':mobile,
                        'pass':pass
                    }
                ]
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
    }
    componentDidMount() {
        
    }
    render() {
        return (

            <div className={styles.account} >
                <div className={styles.opts}>
                    <Link to="/account/signin">Sign in</Link>
                    <Link to="/account/signup">Sign up</Link>
                </div>
                <Routes>
                    <Route path="/account" element={<Login />}></Route>
                    <Route path="/account/signin" element={<Login/>}></Route>
                    <Route path="/account/signup" element={<Signup/>}></Route>
                </Routes>
            </div>
        )
    }
}