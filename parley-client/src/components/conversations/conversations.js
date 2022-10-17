import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Conversation} from './conversation';



class Conversations extends Component {
    render(){
        return (
            <div class="text-center">            
                {this.props.conversations.conversations.map(convo => 
                    <Link key={convo.id} to={`/conversations/${convo.id}`}>
                        <Conversation key={convo.id} title={convo.title} state={this.props.conversations.conversations}/> 
                    </Link>
                )}
            </div>
        )
    }
}

export default Conversations;