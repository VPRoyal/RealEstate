import React, { Component } from 'react'
import styles from "./select.module.css"
export default class CustomSelect extends Component {
    constructor(props){
        super(props);
        this.select=React.createRef();
        this.state={
            active:false,
            val:"Default",
            icon:{
                display:"inline",
                fill:"var(--blue)"
            }

        }
        // Variable for using
        this.preElem=null;
        
        if(props.default){
            this.state.val=props.default
        }
    }
    
    icn(){
        if(this.state.active){
            this.setState({active:false})

        }
        else{this.setState({active:true})
    }
    }
    opt(e){
            var currenElem=e.target
             this.setState({active:false,val:currenElem.innerText})
              if(this.preElem){
                  this.preElem.style.color=""
                  this.preElem.style.backgroundColor=""
                  this.preElem=currenElem
                  currenElem.style.color="white";
                  currenElem.style.backgroundColor="var(--blue)"
              }
              else{
                  this.preElem=currenElem
                  currenElem.style.color="white";
                  currenElem.style.backgroundColor="var(--blue)"
              }
            
    }
    click=(e)=>{
        const isoutside=!this.select.current.contains(e.target)
        if(isoutside&&this.state.active){
            this.setState({active:false})
        }
    }
    componentDidMount(){
        document.addEventListener("click",this.click)
    }
    componentWillUnmount(){
        document.removeEventListener("click", this.click)
    }
    render() {
        return (
            <div ref={this.select} className={styles.select} >
                <div className={styles.bar} >
                <span>
                    {this.state.val}
                </span>
                <span onClick={()=>{this.icn()}} >
                <svg style={{display:this.state.active?"none":null}} width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
                <svg style={this.state.active?this.state.icon:null} width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
                </span>
                </div>
                <div className={styles.options} style={{display:this.state.active?null:"none"}} >
                <ul  >
                {
                            this.props.data.map((item, index) => {
                                return (
                                    
                                    <li key={index} onClick={(e)=>{this.opt(e)}} >{item}</li>
                                )
                            })
                        }
                </ul>
                </div>
            </div>
        )
    }
}
