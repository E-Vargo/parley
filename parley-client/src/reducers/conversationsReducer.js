const conversationsReducer = (state = {conversations: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_CONVERSATIONS":
            return {
                ...state,
                conversations: [...state.conversations],
                loading: true
            }

        case "ADD_CONVERSATION":
            return {
                ...state,
                user: action.user,
                loading: false
            }

        default:
            return state;
    }
}

export default conversationsReducer