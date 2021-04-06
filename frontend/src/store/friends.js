import { fetch } from './csrf';

const SET_LIST = 'items/setList';
const ADD_ONE = 'items/addOne';
const REMOVE_ONE = 'items/removeOne';

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


export const getFriends = (userId) => async (dispatch) => {
    const response = await fetch(`/api/friends/${userId}`);
    if (response.ok) {
        console.log("RES FROM FRIENDS", response)
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
        default:
            return state;
    }
}

export default reducer;