import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConversations } from '../actions/conversations';
import Conversations from '../components/conversations/conversations'
import ConversationInput from '../components/conversations/conversationInput';


class ConversationsContainer extends Component {

    componentDidMount() {
        this.props.fetchConversations()
      }

    render() {
        return (
            <div>
                where conversation logic will be housed
                <Conversations />
                <ConversationInput />
            </div>
        )
    }
}

export default connect(null, {fetchConversations})(ConversationsContainer)