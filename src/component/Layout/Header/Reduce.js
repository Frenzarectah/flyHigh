
export const initState = {
    name:"",
    departure:"",
    arrival:"",
    depart_date:"",
    arrive_date:""
}
export const flightReducer = (state,action) =>{
    switch(action.type){
    case "CHANGE_NAME":
        console.log("changing name...")
        return{...state,name: state.name="NOME CAMBIATO"}    
    case "CHANGE_DEPART":
        console.log("changing depart airport")
        return{...state,departure: state.departure="MALPENSA"}
    default:
        console.log("no action")
        return{...state,nome: state.name="DEFAULT"}

    }
}


