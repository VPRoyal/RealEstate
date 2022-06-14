import React, { useState, useEffect } from 'react'
import { Link,useLocation} from 'react-router-dom'
import styles from "./leftbar.module.css"

export default function Leftbar() {
    const [active, setactive] = useState(1);
    const { pathname } = useLocation();
    useEffect(() => {
        
           if(pathname=="/home"||pathname=="/home/dashboard") setactive(1)
           else if(pathname=="/home/listings") setactive(2)
           else if(pathname=="/home/analytics") setactive(3)
           else if(pathname=="/home/profiles") setactive(4)
         
     },[pathname])

    return (
        (
            <div className={styles["leftbar"]}>

                <div className={styles["nav"]}>
                    <ul>
                        <li id={active===1?styles["active"]:null} >
                            <Link to="/home/dashboard">
                                <span className={styles["link-icon"]}  >
                                    <svg width="16" height="16" fill="currentColor" id={styles.door} viewBox="0 0 16 16">
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                                    </svg>
                                </span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li id={active===2?styles["active"]:null} >
                            <Link to="/home/listings" >
                                <span className={styles["link-icon"]}   >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id={styles.post} viewBox="0 0 16 16">
                                        <path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8z" />
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                    </svg>
                                </span>
                                <span>Listings</span>
                            </Link>
                        </li>
                        <li id={active===3?styles["active"]:null}>
                            <Link to="/home/analytics" >
                                <span className={styles["link-icon"]}   >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id={styles.analytics} viewBox="0 0 16 16">
                                        <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z" />
                                        <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z" />
                                    </svg>
                                </span>
                                <span>Analytics</span>
                            </Link>
                        </li>
                        <li id={active===4?styles["active"]:null}>
                            <Link to="/home/profiles" >
                                <span className={styles["link-icon"]}  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id={styles.person} viewBox="0 0 16 16">
                                        <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                                        <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                </span>
                                <span>Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    )
}



