import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { fetchPostsAndUsers } from './../actions';

class UserHeader extends Component {
    /*
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }
    */

    render() {
        const { user } = this.props;
        if (!user) {
            return null;
        }

        return(
            <div>
                From UserHEader Component {user.name}
            </div>
        );
    }
};

const MapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(MapStateToProps) (UserHeader);
