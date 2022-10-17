import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConversations } from '../actions/conversations';
import Conversations from '../components/conversations/conversations'
import ConversationInput from '../components/conversations/conversationInput';
import {Nav} from '../components/nav'


class ConversationsContainer extends Component {

    componentDidMount() {
        this.props.fetchConversations()
      }

    render() {
        return (
            <div>
                <Nav />
                <Conversations conversations={this.props.conversations}/>
                <ConversationInput />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        conversations: state.conversations
    }
}

export default connect(mapStateToProps, {fetchConversations})(ConversationsContainer)