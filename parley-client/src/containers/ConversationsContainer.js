import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConversations } from '../actions/conversations';
import Conversations from '../components/conversations/conversations'


class ConversationsContainer extends Component {

    componentDidMount() {
        this.props.fetchConversations()
      }

    render() {
        return (
            <div>
                where conversation logic will be housed
                <Conversations />
            </div>
        )
    }
}

export default connect(null, {fetchConversations})(ConversationsContainer)