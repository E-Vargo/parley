export const conversationsReducer = (state = [], action) => {
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
                conversation: action.conversation,
                loading: false
            }

        default:
            return state;
    }
}

