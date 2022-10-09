import React, {Component} from 'react';



class SignUp extends Component {
    render(){
        return (
            <div>
                here will be sign up formu
                upon submission (if both fields are full) use addUser action to persist user to database
            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="submit"/>
            </form>
        
            </div>
        )
    }
}

export default SignUp;