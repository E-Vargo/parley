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
          this.setState({
            title: ''
          })
        }
    
    
    
    render(){
        return (
            <div class="text-center">
        
            <form onSubmit={this.handleSubmit}>
                ------------------------------------------------------------------------------------------
                <br/>
                <br/>
                <br/>
                <label>Add Conversation:</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                
                <input class="btn btn-outline-success" type="submit" value="Create Conversation"/>
                
            </form>
        
            </div>
        )
    }
}

export default connect(null, {addConvo})(ConversationInput);