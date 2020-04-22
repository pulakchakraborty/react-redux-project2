import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './../actions';

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.users.find((user) => user.id === this.props.userId);

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

const MapStateToProps = (state) => {
    return {users: state.users};
}

export default connect(MapStateToProps, { fetchUser }) (UserHeader);
