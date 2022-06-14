import React,{ useState } from "react"
import {useNavigate} from 'react-router-dom'
import styles from "./navbar.module.css"

function Navbar() {
    const [smenu,setSmenu]=useState(false);
    const [smenuid,setSmenuid]=useState(null);
    const navigate = useNavigate();
    const showmenu=()=>{
        if(smenu){
            setSmenu(false);
            setSmenuid(null);
        }
        else{
            setSmenu(true);
            setSmenuid(styles["menu-smallclk"]);
        }
    }
    return (
        <nav>
                <div className={styles["top"]}>
                    <div className={styles["topbar"]}>
                        <div className={styles["logo"]}>
                            <span><img src="/Logo (Complete).svg" alt="" />
                            </span>

                        </div>
                        <div className={styles["menu"]} >
                            <ul>
                                <li><a href=""><span>Buy</span></a></li>
                                <li><a href=""><span>Sell</span></a></li>
                                <li><a href=""><span>Finance</span></a></li>
                            </ul>
                            <ul>
                                <li><button><a href="/account/signin">Sign in</a></button></li>
                                <li><button><a href="/account/signup">Sign up</a></button></li>
                                
                            </ul>
                        </div>
                        <div onClick={()=>{showmenu()}} className={styles["menu-small"]} id={smenuid}>
                            <div style={{visibility:smenu?"visible":"hidden"}} >
                                <ul>
                                    <li><a href=""><span>Sign up</span></a></li>
                                    <li><a href=""><span>Sign in</span></a></li>
                                    <li><a href=""><span>Buy</span></a></li>
                                    <li><a href=""><span>Sell</span></a></li>
                                    <li><a href=""><span>Finance</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    )
}
export default Navbar;