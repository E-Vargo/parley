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


        case "ADD_COMMENT":
            return {...state, comments: [...state.comments, action.comment], loading: false}

        case "DELETE_COMMENT": 
            return {...state, comments: state.comments.filter(comment => comment.id !== action.comment.id), loading: false}

        case "UPDATE_COMMENT":
            let index = state.comments.findIndex(comment => comment.id === action.comment.id)
            

            return {
                ...state,
                comments: [...state.comments.slice(0, index),
                            action.comment, 
                            ...state.comments.slice(index + 1)
                        ],
                loading: false
            }

        default:
            return state;
    }
}
