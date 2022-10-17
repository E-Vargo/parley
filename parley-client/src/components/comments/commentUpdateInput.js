import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateComment} from '../../actions/comments';



class CommentUpdateInput extends Component {
    
        state = {
            id: this.props.commentData.id,
            content: this.props.commentData.content,
            conversation_id: this.props.conversation_id
        }
    
        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleSubmit = e => {
          e.preventDefault()
          this.props.setLoading(false)
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
                <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
                

                <input class="btn btn-outline-info" type="submit" value="Update"/>
            </form>
        
            </div>
        )
    }
}

export default connect(null, {updateComment})(CommentUpdateInput);