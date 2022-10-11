const initialState = {
    comments: [],
    loading: false
}


export const commentsReducer = (state = initialState, action) => {
    switch(action.type){

        case "LOADING_COMMENTS":
            return {
                ...state,
                comments: [...state.comments],
                loading: true
            }

        case "ADD_COMMENTS":
            return {...state, comments: action.comments, loading: false}


        case "ADD_COMMENTS":
            return {...state, comments: [...state.comments, action.conversation], loading: false}

        default:
            return state;
    }
}
