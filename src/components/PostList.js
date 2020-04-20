import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from './../actions';

class PostList extends Component {
    componentDidMount = () => {
        this.props.fetchPosts();
    }

    render() {
        return(
            <div>
                From Post List component: {this.props.posts}
            </div>
        );
    }
}

const MapStateToProps = (State) => {
    return { posts: State.posts };
}

export default connect(MapStateToProps, { fetchPosts }) (PostList);
