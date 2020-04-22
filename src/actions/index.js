import jsonPlaceholder from './../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    // Refactoring using .chain function
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};

export const fetchPosts = () => async dispatch => {
    const responseData = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: responseData });
};

export const fetchUser = (id) => async dispatch => {
    const responseData = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: responseData });
};

/* Memoized Function Approach
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async(id, dispatch) => {
    const responseData = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: responseData });
});
*/
