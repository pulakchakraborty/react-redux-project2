import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from './../actions';

class PostList extends Component {
    componentDidMount = () => {
        this.props.fetchPosts();
    }

    render() {
        console.log(this.props.posts);
        return(
            <div>
                From Post List component:
            </div>
        );
    }
}

const MapStateToProps = (State) => {
    return { posts: State.posts };
}

export default connect(MapStateToProps, { fetchPosts }) (PostList);
