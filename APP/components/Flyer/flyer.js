import React from "react"
import styles from "./flyer.module.css"
export default class Flyer extends React.Component {
    constructor() {
        super();
        this.state = {
            clearbtn: false,
            opt: "Buy",
            list: []
        }
        this.txtInpt = React.createRef();
        this.opts_active = {
            "backgroundColor": "var(--yellow)",
            "borderTopLeftRadius": "5px",
            "borderTopRightRadius": "5px",
            "color": "var(--grey_black)"
        },
            this.opts_inactive = {
                "backgroundColor": "none",
                "border": "none",
                "color": "white"
            }
        this.list = []
    }
    srchinpt = (e) => {
        const v = e.target.value;
        if (!v && this.state.clearbtn) this.setState({ clearbtn: false });
        else if (!this.state.clearbtn)  this.setState({ clearbtn: true });
        this.srch(v);
    }
    srch = async (v) => {
        this.list = []
        if(v){
        const res = await fetch(`http://localhost:5000/location/?search=${v}`)
        const data = await res.json()
        if (data) {
            if (data.state) {
                data.state.forEach(e => {
                    this.list = [...this.list, [e, "state", "State"]]
                });
            }
            if (data.city) {
                data.city.forEach(e => {
                    this.list = [...this.list, [(e._id.city + ', ' + e._id.state), "city", "City"]]
                });
            }
            if (data.locality) {
                data.locality.forEach(e => {
                    this.list = [...this.list, [(e.locality + ', ' + e.city), "locality", ("PIN: " + e._id.substring(3))]]
                });
            }
        }
        if(!this.list.length) this.list = [...this.list, ["Sorry, Nothing Found", "", ""]];
    }
        this.setState({ list: this.list })
    }
    clear() {
        this.txtInpt.current.value = ""
        this.setState({ clearbtn: false, list: [] })
    }
    opts(e) {
        const v = e.target.innerText
        this.setState({ opt: v })
    }
    select = (e) => {
        console.log(e.target.getAttribute("key"))

    }
    render() {
        return (
            <div className={styles["flyer"]}>
                <div className={styles["flyer-A"]}>
                    <div className={styles["fly-title"]}><h1><span style={{ color: "#FFDE59" }} >Bookmark!</span> <span>Your Dream House</span> <span>Today</span></h1></div>
                </div>
                <div className={styles["flyer-B"]} >
                    <div className={styles["srch-opts"]}>
                        <button onClick={(e) => { this.opts(e) }} style={this.state.opt == "Buy" ? this.opts_active : null} >Buy</button>
                        <button onClick={(e) => { this.opts(e) }} style={this.state.opt == "Sell" ? this.opts_active : null} >Sell</button>
                        <button onClick={(e) => { this.opts(e) }} style={this.state.opt == "Rent" ? this.opts_active : null} >Rent</button>
                    </div>
                    <div className={styles["fly-searchbar"]}>
                        <div>
                            <input ref={this.txtInpt} onChange={(e) => { this.srchinpt(e) }} type="text" name="search" id={styles["searchbar"]} placeholder="Search by City Name / PIN Code" />
                            <button onClick={() => { this.clear() }} style={{ display: this.state.clearbtn ? "block" : "none" }} id={styles["clearbtn"]}></button>
                            <button id={styles["searchbuttn"]}></button>
                        </div>

                    </div>
                    <div className={styles["suggstn-box"]} style={{ display: "block" }} >
                        <ul>
                            {this.state.list.map((val, i) => {
                                return <li onClick={(e) => { this.select(e) }} key={i} name={val[1]} ><span>{val[0]}</span><span>{val[2]}</span></li>
                            }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}