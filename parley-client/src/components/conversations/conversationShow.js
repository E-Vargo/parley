import React, { Component } from 'react';
import {connect} from 'react-redux';


class ConversationShow extends Component  {
    
    render(){
        const path = window.location.pathname
        const re = /[0-9]+/;
        const convoId = path.match(re)[0]
        const conversation = this.props.conversations.find(convo => convo.id == convoId)
        
    return (
        <div>
           {console.log(convoId)}
           {console.log(conversation.title)}
        </div>)}
}

const mapStateToProps = (state) => {
    return {
        conversations: state.conversations.conversations
    }
}

export default connect(mapStateToProps)(ConversationShow)
