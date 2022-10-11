import React, {Component} from 'react';
import Conversation from './conversation';
import ConversationInput from './conversationInput';


class Conversations extends Component {
    render(){
        return (
            <div>
            <Conversation />
            <ConversationInput />
            </div>
        )
    }
}

export default Conversations;