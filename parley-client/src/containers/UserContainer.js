import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from '../components/user/SignUp'



class UserContainer extends Component {

    render() {
        return (
            <div>
                <SignUp />
            </div>
        )
    }
}

export default UserContainer