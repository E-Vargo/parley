import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from '../components/Home';
import ConversationsContainer from '../containers/ConversationsContainer';
import {Conversation} from './conversations/conversation';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={< Home />}/>
                <Route path="/conversations" element={<ConversationsContainer/>} />
                <Route path="/conversations/:conversationId" element={<Conversation />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;