import React, { Component } from 'react'
import styles from "./about.module.css"
const rate_text = {
    1: "It's not Worthy !!!",
    2: "Need some repair !!!",
    3: "Good for living.",
    4: "It's far better !!!",
    5: "Wow ! It's a Dream House"
}
var star_style = ``
export default class about extends Component {
    constructor() {
        super();
        this.state = {
            rate_text: null,
            cmnt: {display:"none"},
            review_txt: null,
            star: null
        }
    }
    rating(e) {
        var val = e.target.value
        // ******* I need to Check for User authorization for this event to worked ************
        this.setState({ rate_text: rate_text[val], cmnt:{display:"block"} })
    }
    post(e) {
        var obj = document.getElementsByTagName("textarea")[0];
        var val = obj.value, j;
        star_style = ``
        this.setState({ review_txt: val, star: "star" })
        this.setState({ rate_text: "Thanks for rating this House.", cmnt:{display:"block", width:"200px", backgroundColor:"var(--orange)"} })
        for (j = 1; j <= 5; j++) {
            document.getElementById("s" + j).disabled = true
        }
        obj.style.display = "none";
        e.target.style.display = "none"
    }
    render() {
        return (
            <div className={styles["about"]}>
                <h2>About Seller</h2>
                <p><span>Name: </span><span>Vinay pratap singh chauhan</span></p>
                <p><span>Member: </span><span>since 2 years</span></p>
                <p><span>Houses sold till now: </span><span>5</span></p>
                <p><span>Seller type: </span><span>Dealer</span></p>
                <div className={styles["ratings"]} >
                    <div className={styles["seller-rating"]} style={{ flexWrap: "wrap", alignContent: "stretch" }}>
                        <div style={{ "display": "block", marginRight: "20px" }} >
                            <span>Rate the seller</span>
                        </div>
                        <div style={{ display: "block", width: "auto", flexGrow: "1", marginLeft: "0px" }} >
                            <div className={styles["rating-bar"]} >
                                <div onChange={(e) => { this.rating(e) }} className={styles[this.state.star]} >
                                    <input type="radio" name="star" id="s1" value="5" /><label htmlFor="s1"></label>
                                    <input type="radio" name="star" id="s2" value="4" /><label htmlFor="s2"></label>
                                    <input type="radio" name="star" id="s3" value="3" /><label htmlFor="s3"></label>
                                    <input type="radio" name="star" id="s4" value="2" /><label htmlFor="s4"></label>
                                    <input type="radio" name="star" id="s5" value="1" /><label htmlFor="s5"></label>
                                </div>
                            </div>
                            <div className={styles["rating-comnt"]} style={this.state.cmnt }>
                                <div>
                                    <p>{this.state.rate_text}</p>
                                    <textarea rows="4" name="comment" placeholder="write a review (optional)"></textarea>
                                    <button onClick={(e) => { this.post(e) }} >Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
