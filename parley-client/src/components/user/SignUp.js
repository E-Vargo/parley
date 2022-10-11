import React, {Component} from 'react';
import  {connect} from 'react-redux';
import {addUser} from '../../actions/auth'

class SignUp extends Component {
    
        state = {
            username: '',
            password: '',
            avatar: ''
        }
    
        handleChange = e => {
            

            this.setState({
                [e.target.name]: e.target.value
            })
        }

        handleSubmit = e => {
            e.preventDefault()
            this.setState({
                user:{...this.state}
            })
            this.props.addUser(this.state)
        }
    
    
    
    render(){
        return (
            <div>
                here will be sign up formu
                upon submission (if both fields are full) use addUser action to persist user to database
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <br/>

                <label>Password</label>
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                <br/>

                <label>Avatar url</label>
                <input type="text" name="avatar" value={this.state.avatar} onChange={this.handleChange}/>
                <br/>


                <input type="submit"/>
            </form>
        
            </div>
        )
    }
}

export default connect(null, { addUser })(SignUp);