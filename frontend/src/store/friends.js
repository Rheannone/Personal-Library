import { fetch } from './csrf';

const SET_LIST = 'friends/setList';
const ADD_ONE = 'friends/addOne';
const REMOVE_ONE = 'friends/removeOne';
const GET_ALL = 'friends/getAll';



const setFriends = (list) => ({
    type: SET_LIST,
    payload: list
});

const addFriend = (item) => ({
    type: ADD_ONE,
    payload: item
});

const removeFriend = (id) => ({
    type: REMOVE_ONE,
    payload: id
});

const searchFriend = (email) => ({
    type: GET_ALL,
    payload: email
});

export const searchUsers = (email) => async (dispatch) => {
    const response = await fetch(`/api/users/${email}`);
    if (response.ok) {
        dispatch(searchFriend(response))
    };
    return response;
}

export const getFriends = (userId) => async (dispatch) => {
    const response = await fetch(`/api/friends/${userId}`);
    if (response.ok) {
        dispatch(setFriends(response))
    };
    return response;
}

function reducer(state = {}, action) {
    let newState = {};
    switch(action.type) {
        case SET_LIST:
            action.payload?.data?.friends?.forEach(friend => {
                newState[friend.id] ={
                    id: friend.id,
                    username: friend.friend_username
                };
            });
            return newState;
        case GET_ALL:
            newState= {... state };
            action.payload?.data?.users?.forEach(user => {
                newState[user.id] = {
                    id: user.id,
                    username: user.username
                };
            });
            return newState
        default:
            return state;
    }
}

export default reducer;