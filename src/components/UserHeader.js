import React, { Component } from 'react';

class UserHeader extends Component {
    render() {
        return(
            <div>
                From UserHEader Component {this.props.userId}
            </div>
        );
    }
};

export default UserHeader;
