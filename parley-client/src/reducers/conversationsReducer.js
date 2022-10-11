const initialState = {
    conversations: [],
    loading: false
}


export const conversationsReducer = (state = initialState, action) => {
    switch(action.type){

        case "LOADING_CONVERSATIONS":
            return {
                ...state,
                conversations: [...state.conversations],
                loading: true
            }

        case "ADD_CONVERSATIONS":
            return {...state, conversations: action.conversations, loading: false}


        case "ADD_CONVERSATION":
            return {...state, conversations: [...state.conversations, action.conversation], loading: false}

        default:
            return state;
    }
}

