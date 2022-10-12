import React, { Component } from 'react';
import {connect} from 'react-redux';


class ConversationShow extends Component  {
    
    render(){
        const path = window.location.pathname
        const re = /[0-9]+/;
        const convoId = path.match(re)
        
    return (
        <div>
           {console.log(convoId[0])}
        </div>)}
}

const mapStateToProps = (state) => {
    return {
        conversations: state.conversations.conversations
    }
}

export default connect(mapStateToProps)(ConversationShow)
