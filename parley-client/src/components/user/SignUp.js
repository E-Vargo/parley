import React, {Component} from 'react';



class SignUp extends Component {
    
        state = {
            username: '',
            pasword: '',
            avatar: ''
        }
    
        handleChange = e => {
            const {name, value} = e.target

            this.setState({
                [name]: value
            })
        }

        handleSubmit = e => {
            e.preventDefault()
            this.props.addUser(this.state)
        }
    
    
    
    render(){
        return (
            <div>
                here will be sign up formu
                upon submission (if both fields are full) use addUser action to persist user to database
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" onChange={this.handleChange}/>
                <br/>

                <label>Password</label>
                <input type="text" name="password" onChange={this.handleChange}/>
                <br/>

                <label>Avatar url</label>
                <input type="text" name="avatar" onChange={this.handleChange}/>
                <br/>


                <input type="submit"/>
            </form>
        
            </div>
        )
    }
}

export default SignUp;