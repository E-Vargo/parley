const initialState = {
    conversations: []
}


export const conversationsReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOADING_CONVERSATIONS":
            return {
                ...state,
                conversations: state.conversations,
                loading: true
            }

        case "FETCH_CONVERSATION":
            return {conversations: action.payload}

        case "ADD_CONVERSATION":
            return [...state, action.payload]

        default:
            return state;
    }
}

