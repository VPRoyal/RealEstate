import React, { Component } from 'react'
import styles from "./postdata.module.css"

//!!!!!! NOTICE:- There is a gap between  div description and div facilities; only in firefox not in chrome
//!!!!!! NOTICE:- Overflow in x direction tends to move just by cursor. So, we need to stop its movement by cursor and should be depends on steps following the react component.
export default class postdata extends Component {
    constructor(props){
        super();
        this.state={
            move:props.current_step
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.current_step!==prevProps.current_step){
            this.setState({move:this.props.current_step})
        }
    }
    render() {
        return (
            <div className={styles["data-wrap"]} >
                <div className={styles["data-box"]} >
                    <div className={styles["details"]} style={{ transform: `translateX(${(-100)*(this.state.move)}%)` }} >
                        <div className={styles["list"]} >
                            <h3>I want to ...</h3>

                            <label htmlFor="list1" className={styles.radio} >Sell<input type="radio" name="listing" id="list1" /><span className={styles.custom} ></span></label>
                            <label htmlFor="list2" className={styles.radio} >Rent<input type="radio" name="listing" id="list2" /><span className={styles.custom} ></span></label>

                            <label htmlFor="list3" className={styles.radio} >PG<input type="radio" name="listing" id="list3" /><span className={styles.custom} ></span></label>
                        </div>
                        <div className={styles["p-type"]} style={{ display: "none" }} >
                            <h3>And the property is ...</h3>

                            <label htmlFor="p-type1" className={styles.radio2} ><input type="radio" name="p-type" id="p-type1" /><span className={styles.custom2} >Residential</span></label>

                            <label htmlFor="p-type2" className={styles.radio2}><input type="radio" name="p-type" id="p-type2" /><span className={styles.custom2}>Commercial</span></label>

                            <div className={["options"]} >

                                <label htmlFor="resd-type1" className={styles.radio2} ><input type="radio" name="resd" id="resd-type1" /><span className={styles.custom2} >Apartment</span></label>

                                <label htmlFor="resd-type4" className={styles.radio2} ><input type="radio" name="resd" id="resd-type4" /><span className={styles.custom2} >Flat/Builder Floor</span></label>

                                <label htmlFor="resd-type2" className={styles.radio2} ><input type="radio" name="resd" id="resd-type2" /><span className={styles.custom2} >Residential land</span></label>

                                <label htmlFor="resd-type3" className={styles.radio2} ><input type="radio" name="resd" id="resd-type3" /><span className={styles.custom2} >Farm House</span></label>

                                <label htmlFor="resd-type5" className={styles.radio2} ><input type="radio" name="resd" id="resd-type5" /><span className={styles.custom2} >Residential</span></label>

                                <label htmlFor="resd-type6" className={styles.radio2} ><input type="radio" name="resd" id="resd-type6" /><span className={styles.custom2} >Others</span></label>
                            </div>
                            <div className={["options"]} >
                                <label htmlFor="comm-type1" className={styles.radio2} ><input type="radio" name="comm-type" id="comm-type1" /><span className={styles.custom2} >Residential</span></label>
                                <label htmlFor="comm-type2" className={styles.radio2} ><input type="radio" name="comm-type" id="comm-type2" /><span className={styles.custom2} >Residential</span></label>
                                <label htmlFor="comm-type3" className={styles.radio2} ><input type="radio" name="comm-type" id="comm-type3" /><span className={styles.custom2} >Residential</span></label>
                                <label htmlFor="comm-type4" className={styles.radio2} ><input type="radio" name="comm-type" id="comm-type4" /><span className={styles.custom2} >Residential</span></label>
                                <label htmlFor="comm-type5" className={styles.radio2} ><input type="radio" name="comm-type" id="comm-type5" /><span className={styles.custom2} >Residential</span></label>
                                <label htmlFor="comm-type6" className={styles.radio2} ><input type="radio" name="comm-type" id="comm-type6" /><span className={styles.custom2} >Residential</span></label>
                            </div>
                        </div>
                        <div className={styles["location"]} >
                            <h3>Located at ...</h3>
                            <div className={styles["location-drop"]} >
                                <label>Country</label>
                                <div>
                                    <div>
                                        <input type="text" />
                                        <i id={styles["down-arrow"]}></i>
                                    </div>
                                    <ul>
                                        <li><span>India</span></li>
                                        <li><span>Nepal</span></li>
                                        <li><span>Spain</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles["location-drop"]} >
                                <label>State</label>
                                <div>
                                    <div>
                                        <input type="text" />
                                        <i id={styles["down-arrow"]}></i>
                                    </div>
                                    <ul>
                                        <li><span>Rajasthan</span></li>
                                        <li><span>Haryana</span></li>
                                        <li><span>Bengal</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles["location-drop"]} >
                                <label>City</label>
                                <div>
                                    <div>
                                        <input type="text" />
                                        <i id={styles["down-arrow"]}></i>
                                    </div>
                                    <ul>
                                        <li><span>Jaipur</span></li>
                                        <li><span>Chandigarh</span></li>
                                        <li><span>Kolkata</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles["location-drop"]} >
                                <label>Pin/Zip Code</label>
                                <input type="number" />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className={styles["description"]} style={{ transform: `translateX(${(-100)*(this.state.move)}%)` }} >
                        <div>
                            <h3>Title</h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Price</h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Area</h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Description</h3>
                            <textarea type="text" name="" id="" />
                        </div>
                    </div>
                    <div className={styles["facilities"]} style={{ transform: `translateX(${(-100)*(this.state.move)}%)` }} >
                        <div>
                            <h3>Indoor facilities</h3>
                            <div>
                                <div>
                                    <select>
                                        <option>Bed</option>
                                        <option>Bath</option>
                                        <option>Hall</option>
                                        <option>Kitchen</option>
                                    </select>

                                    <input type="number" placeholder="Num" />
                                    <button>Add</button>
                                </div>
                                <div>
                                    <span>2 Bed</span>
                                    <span>2 Hall</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles["outdoor"]} >
                            <h3>Outdoor facilities</h3>
                            <div>
                                <div>
                                    <select>
                                        <option>Nearby Schools</option>
                                        <option>Transport facility</option>
                                        <option>Nearby Hospitals</option>
                                        <option>Local Market</option>
                                    </select>
                                    <input type="text" placeholder="Place Name" ></input>
                                    <input type="number" placeholder="distance" />
                                    <button>Add</button>
                                </div>
                                <div>
                                    <span>2 Bed</span>
                                    <span>2 Hall</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Other facilities</h3>
                            <div>
                                <div>
                                    <select>
                                        <option>Nearby Schools</option>
                                        <option>Transport facility</option>
                                        <option>Nearby Hospitals</option>
                                        <option>Local Market</option>
                                    </select>
                                    <button>Add</button>
                                </div>
                                <div>
                                    <span>2 Bed</span>
                                    <span>2 Hall</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["graphics"]} style={{ transform: `translateX(${(-100)*(this.state.move)}%)` }} >
                        <div>
                            <h3>Do you have Images ?</h3>
                            <div>
                                <label htmlFor="yes" className={styles.radio} >Yes<input type="radio" name="ques" id="yes" /><span className={styles.custom} ></span></label>
                                <label htmlFor="no" className={styles.radio} >No<input type="radio" name="ques" id="no" /><span className={styles.custom} ></span></label>
                            </div>
                            <div className={styles["upload-img"]} >
                                <label htmlFor="upl-img" ><input id="upl-img" type="file" />Add Images</label>
                            </div>
                            <div className={styles["img-box"]} >
                                <div>
                                    <img src="./pexels-aleksejs-bergmanis-681335.jpg" alt="" />
                                    <i id={styles["cross"]} ></i>
                                </div>
                                <div>
                                    <img src="./pexels-aleksejs-bergmanis-681335.jpg" alt="" />
                                    <i id={styles["cross"]} ></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Do you have Floormap ?</h3>
                            <div>
                                <label htmlFor="yes1" className={styles.radio} >Yes<input type="radio" name="ques1" id="yes1" /><span className={styles.custom} ></span></label>
                                <label htmlFor="no1" className={styles.radio} >No<input type="radio" name="ques1" id="no1" /><span className={styles.custom} ></span></label>
                            </div>
                            <div className={styles["upload-img"]} >
                                <label htmlFor="upl-img1" ><input id="upl-img1" type="file" />Add Images</label>
                            </div>
                            <div className={styles["img-box"]} >
                                <div>
                                    <img src="./pexels-aleksejs-bergmanis-681335.jpg" alt="" />
                                    <i id={styles["cross"]} ></i>
                                </div>
                                <div>
                                    <img src="./pexels-aleksejs-bergmanis-681335.jpg" alt="" />
                                    <i id={styles["cross"]} ></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Do you have Video tour ?</h3>
                            <div>
                                <label htmlFor="yes2" className={styles.radio} >Yes<input type="radio" name="ques2" id="yes2" /><span className={styles.custom} ></span></label>
                                <label htmlFor="no2" className={styles.radio} >No<input type="radio" name="ques2" id="no2" /><span className={styles.custom} ></span></label>
                            </div>
                            <div className={styles["upload-img"]} >
                                <label htmlFor="upl-img2" ><input id="upl-img2" type="file" />Add Video</label>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
