
export const initState = {
    name:"",
    departure:"",
    arrival:"",
    depart_date:"",
    arrive_date:""
}
export const flightReducer = (state,action) =>{
    switch(action.type){
    case "CHANGE_FORM":
        console.log("changing name...")
        return{...state,name: action.value}    
    case "CHANGE_DEPART":
        console.log("changing depart airport")
        return{...state,departure: action.value}
    default:
        console.log("no action")
        return{...state,nome: state.name="DEFAULT"}

    }
}


