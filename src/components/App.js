import React from 'react';

import './../styles/App.css';
import PostList from './PostList';

const App = () => {
    return(
        <div className="ui container app">
            <PostList />
        </div>
    );
}

export default App;
