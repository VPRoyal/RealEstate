import React, { Component } from 'react'
import styles from "./basic.module.css"
export class basic extends Component {
    constructor(){
        super();
        this.state={
            size:{
                ft:(2000).toFixed(2),
                yard:(2000/9).toFixed(2),
                metre:(2000*0.092903).toFixed(2),
            },
            c_size:(2000).toFixed(2)
        }
    }
    sizeconverter(e){
        var val=e.target.value
        if (val==0) {
            this.setState({c_size:this.state.size.ft})
        }
        else if(val==1){
            this.setState({c_size:this.state.size.yard})

        }
        else if(val==2){
            this.setState({c_size:this.state.size.metre})
        }
    }
    render() {
        return (
            <div className={styles["basic-det"]}>
                            <h2>Basic Details</h2>
                            <p><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-cash" viewBox="0 0 16 16">
                                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                <path
                                    d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                            </svg></span><span>&#8377;</span> <span>25 lac</span></p>
                            <p><span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-card-text" viewBox="0 0 16 16">
                                    <path
                                        d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                    <path
                                        d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </span><span>1Bed</span><span> &#124;</span><span> 2Bath</span><span> &#124;</span><span>
                                    1Hall</span><span> &#124;</span><span> 1 Kitchen</span></p>
                            <p><span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-aspect-ratio" viewBox="0 0 16 16">
                                    <path
                                        d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                                    <path
                                        d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
                                </svg>
                            </span><span>
                                    <span style={{"marginRight":"5px"}} >
                                        {this.state.c_size}
                                    </span>
                                    <span>
                                        <select name="" id=""  onChange={(e)=>{this.sizeconverter(e)}}>
                                            <option value="0" >sq.ft.</option>
                                            <option value="1" >sq.yards</option>
                                            <option value="2" >sq.m.</option>
                                        </select>
                                        <i id={styles["carret"]}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="bi bi-caret-down" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                            </svg>
                                        </i>
                                    </span></span></p>
                            <p><span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path
                                        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </span><span>72-A, durga vihar, jhotwara, jaipur, rajasthan</span></p>

                        </div>
        )
    }
}

export default basic
