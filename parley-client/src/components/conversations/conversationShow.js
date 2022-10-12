import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchComments } from '../../actions/comments';
import CommentInput from '../comments/commentInput';
import {Comment} from '../comments/comment';




class ConversationShow extends Component  {

    componentDidMount(){
        this.props.fetchComments()
    }
    
    render(){
        const path = window.location.pathname
        const regex = /[0-9]+/;
        const convoId = path.match(regex)[0]
        const conversation = this.props.conversations.find(convo => convo.id == convoId)
        const matchedComments = this.props.comments.filter(comment => comment.conversation_id == convoId)
        
    return (
        <div>
            <h1>{conversation.title}</h1>
            <CommentInput conversation_id={parseInt(convoId)}/>
            {matchedComments.map(comment => <p>{comment.content}</p>)}
           {console.log(parseInt(convoId))}
           {console.log(conversation.title)}
           {console.log(matchedComments)}
        </div>)}
}

const mapStateToProps = (state) => {
    return {
        conversations: state.conversations.conversations,
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps, {fetchComments})(ConversationShow)
