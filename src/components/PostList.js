import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from './../actions';

class PostList extends Component {
    componentDidMount = () => {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return(
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="description">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        console.log(this.props.posts);
        return(
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const MapStateToProps = (State) => {
    return { posts: State.posts };
}

export default connect(MapStateToProps, { fetchPosts }) (PostList);
