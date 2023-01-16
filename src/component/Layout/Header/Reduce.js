
export const initState = {
    departure:"",
    arrive:"",
    passenger:"",
    depart_date:"",
    arrive_date:""
}
export const flightReducer = (state,action) =>{
    const {type,field,value} = action
    switch(type){
    case "CHANGE_DEPART":
        console.log("changing depart airport")
        return{...state, [field]: value}    
    case "CHANGE_ARRIVE":
        console.log("changing arrive airport")
        return{...state, [field]: value}
    case "CHANGE_PASSENGER":
        console.log("changing passengers number")
        return{...state, [field]: value}
    case "CHANGE_DEP_DATA":
        console.log("changind departure data")
        return{...state,[field]: value}
    case "CHANGE_ARRIV_DATA":
        console.log("changing arrive data")
        return{...state,[field]:value}
    default:
        console.log("no action")
        return{...state,nome: state.name="DEFAULT"}
    }
}


