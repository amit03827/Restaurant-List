

const initialState=0;


 const changeTheNumber =(state = initialState, action)=>{
    switch(action.type){
        case "INCRENENT" : return state + 1;
        case "DECRENENT" : return state - 1;
        default: return state;
    }
}

export default changeTheNumber;