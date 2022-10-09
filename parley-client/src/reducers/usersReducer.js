const usersReducer = (state = {users: [], laoding: false}, action) => {
    switch(action.type){
        case "LOADING_USERS":
            return {
                ...state,
                users: [...state.users],
                loading: true
            }

        case "ADD_USER":
            return {
                ...state,
                user: action.user,
                loading: false
            }

        default:
            return state;
    }
}

export default usersReducer