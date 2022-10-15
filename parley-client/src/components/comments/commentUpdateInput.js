import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateComment} from '../../actions/comments';



class CommentUpdateInput extends Component {
    
        state = {
            id: this.props.commentData.id,
            content: '',
            conversation_id: this.props.conversation_id
        }
    
        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleSubmit = e => {
          e.preventDefault()
          this.props.updateComment(this.state)
          this.setState({
            content: ''
          })
        }
    
    
    
    render(){
        return (
            <div>
        
            <form onSubmit={this.handleSubmit}>
                <label>Update Comment:</label>
                <input type="text" name="content" value={this.state.content} placeholder={this.props.commentData.content} onChange={this.handleChange}/>
                <br/>

                <input type="submit" value="Add"/>
            </form>
        
            </div>
        )
    }
}

export default connect(null, {updateComment})(CommentUpdateInput);