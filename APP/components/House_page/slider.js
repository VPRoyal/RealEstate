import React, { Component , createRef} from 'react'
import styles from "./slider.module.css"
const imgs = ["/pexels-aleksejs-bergmanis-681335.jpg", "/pexels-curtis-adams-3288102.jpg", "/pexels-nextvoyage-1481105.jpg", "/pexels-pixabay-164558.jpg", "/pexels-pixabay-259588.jpg", "/pexels-nextvoyage-1481105.jpg", "/pexels-pixabay-164558.jpg", "/pexels-pixabay-259588.jpg", "/pexels-curtis-adams-3288102.jpg", "/pexels-aleksejs-bergmanis-681335.jpg", "/pexels-curtis-adams-3288102.jpg", "/pexels-nextvoyage-1481105.jpg", "/pexels-pixabay-164558.jpg"]
export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            move: 0,
        }
        this.wrapperRef=createRef()

        this.box=[]
        this.max=0
        this.index=null
        this.imgN=null,
        this.type=null
        this.prevent=false
    }
    createbox = (n, imgs = []) => {
        var l = imgs.length
        var rem = l % n, blocks = Math.ceil(l / n), box = []
        for (let i = 0; i < blocks; i++) {
            var array = []
            for (let j = 0; j < n; j++) {
                var k = i * n + j
                if (imgs[k]) array.push(imgs[k])
            }
            box.push(array)
        }
        return [box, blocks-1]
    }
    move=(index,typ1,imgN,typ2)=>{
            if(typ1===null||index===0) return 0
            // else if (index===max1) return max2
            var i=Math.ceil(imgN/typ2)-1
            return i
    }
    viewchange = () => {
        if (this.prevent) return
        this.prevent=true
        var width = this.wrapperRef.current.offsetWidth
        var box, n,h
        if (width > 1200) n = 5, h=600;
        else if (width > 600) n = 3, h=width/2;
        else n = 1, h=width/4*3;

        this.wrapperRef.current.style.height=h+"px"
        box = this.createbox(n, imgs )
        this.box=box[0]
        this.index=this.move(this.index,this.type,this.imgN,n)
        this.max = box[1]
        this.type=n
        this.setState({move:this.index*(-100)},()=>{
            this.prevent=false
        })
    }
    move_left() {
        var move=this.state.move
        if (move == 0) move=this.max * (-100),this.index=this.max
        else move=move+100, this.index-=1
        this.imgN=this.index*this.type+1
        this.setState({ move: move })
}
    move_right() {
        var move=this.state.move
        if (move == (this.max) * (-100)) this.index=move=0
        else move=move-100,this.index+=1
        this.imgN=this.index*this.type+1
        this.setState({ move: move })
    }
    componentDidUpdate(preP,preS){
        // var preImg=preP.images,Img=this.props.images
        // if (preImg.length!=Img.length) {
        //     this.viewchange()
        // }
    }
    componentDidMount() {
        this.viewchange()
        addEventListener("resize", this.viewchange);
    }
    componentWillUnmount() {
        removeEventListener("resize", this.viewchange);
    }
    render() {
        return (
            <div ref={this.wrapperRef} className={styles.wrapper}>
                <i onClick={() => { this.move_left() }} id={styles["chevron-left"]}></i>
                <i onClick={() => { this.move_right() }} id={styles["chevron-right"]}></i>
                <div className={styles.Carousal}>
                    {
                        
                        this.box.map((item, index) => {
                            return (
                                <div key={index} className={`${styles["img-box"]} ${styles["type" + item.length]}`} style={{ transform: `translateX(${this.state.move}%)`,transition:this.prevent?'none':null}}>
                                    {
                                        item.map((url, i) => {
                                            return (
                                                <div key={i} ><img src={url} alt="Img Not Available" /></div>
                                            )
                                        })}
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}
