import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addComment} from '../../actions/comments';



class CommentInput extends Component {
    
        state = {
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
          this.props.addComment(this.state)
          this.setState({
            content: ''
          })
        }
    
    
    
    render(){
        return (
            <div>
        
            <form onSubmit={this.handleSubmit}>
            ------------------------------------------------------------------------------------------
                <br/>
                <br/>
                <br/>
                <label>Add Comment:</label>
                <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
                

                <input class="btn btn-outline-success" type="submit" value="Add"/>
            </form>
        
            </div>
        )
    }
}

export default connect(null, {addComment})(CommentInput);