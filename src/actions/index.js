import jsonPlaceholder from './../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const responseData = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: responseData });
};

export const fetchUser = (id) => async dispatch => {
    const responseData = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: responseData });
};
