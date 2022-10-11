export const conversationsReducer = (state = [], action) => {
    switch(action.type){
        case "LOADING_CONVERSATIONS":
            return {
                ...state,
                conversations: [...state.conversations],
                loading: true
            }

        case "FETCH_CONVERSATION":
            return action.payload

        default:
            return state;
    }
}

