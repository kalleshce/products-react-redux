import React, { Component } from "react";
import { Button } from "react-bootstrap";
import UserProfileClass from "./UserProfileClass";

class MyComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            client: ''
        }
    }

    setUserProfile = () => {
        this.setState({
            client: 'kallesh'
        })
    }
    render() {
        return (
            <div>
                <Button onClick={this.setUserProfile}>UserProfile</Button>
                <UserProfileClass client={this.state.client} />
            </div>
        )
    }
}

export default MyComponent;