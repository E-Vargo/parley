import { combineReducers } from "redux"
import {authReducer} from "./authReducer"
import {conversationsReducer} from "./conversationsReducer"


 const rootReducer = combineReducers({
    conversations: conversationsReducer,
    auth: authReducer
})

export default rootReducer