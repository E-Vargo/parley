import { combineReducers } from "redux"
import {conversationsReducer} from "./conversationsReducer"


 const rootReducer = combineReducers({
    conversations: conversationsReducer
})

export default rootReducer