import { combineReducers } from "redux";
import {conversationsReducer} from "./conversationsReducer";
import { commentsReducer } from "./commentsReducer";



 const rootReducer = combineReducers({
    conversations: conversationsReducer,
    comments: commentsReducer
})

export default rootReducer