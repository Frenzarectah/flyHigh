

export const apiReq = (APIData)=>{
    const [departure,arrival] = APIData
    fetch(`https://airlabs.co/api/v9/schedules?dep_iata=${departure}&arr_iata=${arrival}&api_key=b4137d54-e61a-46d8-967a-33ecc5836d83`)
        .then((response) => response.json())
        .then((data) =>{ 
            console.log(data.response[0])
            return(data.response[0])
        })
}