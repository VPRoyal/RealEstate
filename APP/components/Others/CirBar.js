import React, { Component } from 'react'
import styles from "./CirBar.module.css"
//-------->>>>>> We can add color and percent and width of thr top most layer and it will auto resize
export default class cirbar extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            H:null,
            percent:props.percent?props.percent:0,
        }
        this.ini=true
        this.cbar=React.createRef(),
        this.bar_col=props.color.bar?props.color.bar:"var(--blue)",
        this.h2=props.color.text?props.color.text:"var(--blue)",
        this.numb_bg=props.color.numb?props.color.numb:"#e5e5e5",
        this.r=null
        this.circum=null
        this.font=null
        this.strokeW=null
    }
    
    animate=(percent)=>{
        let counter=0
        let timer=setInterval(() => {
            if(counter==percent){
                this.setState({count:counter},()=>{clearInterval(timer)})
                
            }
            else{
                this.setState({count:counter})
                counter=counter+1;
            }
        }, 1);
    }
    resize=()=>{
        var cbar=this.cbar.current
        var W=cbar.clientWidth, H=W
            this.r=Math.ceil(100/220*W)
            this.circum=2*Math.PI*this.r
            this.font=Math.ceil(64/250*W)
            this.strokeW=10/150*W
            this.setState({H:H})
    }
    componentDidUpdate(prevProps){
        if(this.props.percent!==prevProps.percent){
            this.setState({percent:this.props.percent})
        }
    }
    componentDidMount(){
        if (this.ini) {
            this.animate(this.state.percent);
            this.resize()
            this.ini=false
        }
        addEventListener("resize",this.resize)
    }
    componentWillUnmount(){
        removeEventListener("resize",this.resize)
    }
    render() {
         {   
            var  Cstyle1={
                'strokeDasharray':this.circum,
                'strokeWidth':this.strokeW,
                stroke: "#e5e5e5"


             },
             Cstyle2={

                "strokeDasharray":this.circum,
                "strokeDashoffset":`${this.circum-(this.circum*this.state.count)/100}`,
                stroke:this.bar_col,
                'strokeWidth':this.strokeW
                };
    }
        return (
            <div  className={styles["circular-box"]} >
                <div ref={this.cbar}  className={styles["circular-bar"]} style={{height:this.state.H}}>
                    <svg>
                        <circle cx="50%" cy="50%" r={this.r} style={Cstyle1} />
                        <circle cx="50%" cy="50%" r={this.r} style={Cstyle2} />
                    </svg>
                    <div className={styles["numb"]} style={{backgroundColor:this.state.numb_bge}} >
                        <h2 style={{color:this.h2, fontSize:this.font}} >{this.state.count}<span>%</span></h2>
                    </div>
                </div>
                {/* <h2 className={styles["text"]} >Progress</h2> */}
            </div>
        )
    }
}