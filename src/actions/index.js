import jsonPlaceholder from './../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log('before fetching')
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    console.log('fetched', userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));
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
