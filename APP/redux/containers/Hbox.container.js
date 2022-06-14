import { connect } from "react-redux";
import Hbox from "../../components/Hbox/Hbox";
import { addHcard,changeMaxVal } from "../actions/Hcard.action";

const mapStateToProps=state=>({
        Hcards:state.HouseData.Hcards,
        isMax:state.HouseData.isMax
})
const mapDispatchToProps=dispatch=>({
    addHcardHandler:(data)=>dispatch(addHcard(data)),
    changeMax:(data)=>dispatch(changeMaxVal(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Hbox)
