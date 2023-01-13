
export const initState = {
    departure:"partenza",
    arrive:"arrivo",
    passenger:"2",
    depart_date:"",
    arrive_date:""
}
export const flightReducer = (state,action) =>{
    switch(action.type){
    case "CHANGE_ARRIVE":
        console.log("changing arrive airport")
        return{...state,arrive: action.value}    
    case "CHANGE_DEPART":
        console.log("changing depart airport")
        return{...state,departure: action.value}
    case "CHANGE_PASSENGER":
        console.log("changing passengers number")
        return{...state,passenger: action.value}
    default:
        console.log("no action")
        return{...state,nome: state.name="DEFAULT"}
    }
}


