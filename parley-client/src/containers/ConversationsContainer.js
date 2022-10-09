import React, { Component } from 'react';
import { connect } from 'react-redux';
import Conversations from '../components/conversations/conversations'


class ConversationsContainer extends Component {

    render() {
        return (
            <div>
                where conversation logic will be housed
                <Conversations />
            </div>
        )
    }
}

export default ConversationsContainer