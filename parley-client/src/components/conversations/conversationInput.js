import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addConvo} from '../../actions/conversations';



class ConversationInput extends Component {
    
        state = {
            title: ''
        }
    
        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleSubmit = e => {
          e.preventDefault()
          this.props.addConvo(this.state)
        }
    
    
    
    render(){
        return (
            <div>
        
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                <br/>

                <input type="submit" value="Create Conversation"/>
            </form>
        
            </div>
        )
    }
}

export default connect(null, {addConvo})(ConversationInput);