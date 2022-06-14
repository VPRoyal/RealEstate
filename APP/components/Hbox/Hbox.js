import React, { PureComponent } from 'react'
import Hcard from "./Hcard"


export default class Hbox extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isFetching: false,
        }
        this.isStop=false
        this.number=0

        //Redux actions
        this.ADD_HCARD=props.addHcardHandler
        this.CHANGE_MAX=props.changeMax
    }
    handlescroll = () => {
        if (this.props.isMax||this.isStop) return       // this.props.isMax check whether server has data or not
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight <= scrollHeight - 10) return;
            this.isStop=true
            this.setState({isFetching:true})
    }
    fetchmore= async ()=>{
        if(this.props.isMax) return
        const skip = this.number || 0, limit = 2
        const res = await fetch(`http://localhost:5000/ppts/?limit=${limit}&skip=${skip}`)
        const data = await res.json()
        this.number=this.number+data.length
        if (!data.length>0) this.CHANGE_MAX(true);
        this.setState({isFetching:false})
        this.isStop=false
        this.ADD_HCARD(data)
    }
    componentDidUpdate(preState){
        if (this.state.isFetching) this.fetchmore();
    }
    componentDidMount() {
        this.fetchmore()
        addEventListener("scroll", this.handlescroll)
    }
    componentWillUnmount() {
        removeEventListener("scroll", this.handlescroll)
    }
    render() {
        return (
            <>
              <div className="Hcard-container">
                    {
                        this.props.Hcards.map((data, index) => {
                            return (
                                <Hcard data={data} key={index} />
                            )
                        })
                    }
                </div>
                {this.state.isFetching && 'Fetching more list items...'}
                {this.props.isMax && 'Sorry, no more data available'}
            </>
        )
    }
}