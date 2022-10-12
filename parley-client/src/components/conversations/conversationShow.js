import React, { Component } from 'react';
import {connect} from 'react-redux';



class ConversationShow extends Component  {
    
    render(){
        const path = window.location.pathname
        const regex = /[0-9]+/;
        const convoId = path.match(regex)[0]
        const conversation = this.props.conversations.find(convo => convo.id == convoId)
        
    return (
        <div>
            <h1>{conversation.title}</h1>
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
