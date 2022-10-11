import React, {Component} from 'react';
import  {connect} from 'react-redux';


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
          
        }
    
    
    
    render(){
        return (
            <div>
        
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                <br/>

                <input type="submit"/>
            </form>
        
            </div>
        )
    }
}

export default ConversationInput;