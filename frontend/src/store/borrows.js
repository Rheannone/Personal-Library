import { fetch } from './csrf';

const SET_LIST = 'items/setList';
const ADD_ONE = 'items/addOne';
const REMOVE_ONE = 'items/removeOne';

const setList = (list) => ({
    type: SET_LIST,
    payload: list
});

const addOne = (item) => ({
    type: ADD_ONE,
    payload: item
});

export const setOne = (lent, returned, friendId) => async (dispatch) => {
    const response = await fetch(`/api/borrow/`, {
        method: "POST",
        body: JSON.stringify({
            lent, 
            returned,
            friendId,
        }),
    });
    if (response.ok) {
        dispatch(addOne(response));
    };
    return response;
}
export const getBorrows = (userId) => async (dispatch) => {
    const response = await fetch(`/api/borrows/${userId}`);
    if (response.ok) {
        dispatch(setList(response));
    };
    return response;
};


function reducer(state = {}, action) {
    let newState = {};
    switch(action.type) {
        case SET_LIST:
            action.payload?.data?.borrowedItems?.forEach(borrow => {
                newState[borrow.id] = {
                    id: borrow.id,
                    lent: borrow.lent,
                    returned: borrow?.returned,
                    ownerId: borrow.ownerID,
                    borrowerId: borrow.borrowerId,
                    itemId: borrow.itemid
                };
            });
            return newState;
        case ADD_ONE:
            newState = {...state};
            newState[action.payload.id] = {
                lent: action.payload.lent,
                returned: action.payload?.returned,
                friendId: action.payload.borrowerId,
                ownerId: action.payload.ownerId,
                itemId: action.payload.itemid,
            }
            return newState;
        default:
            return state;
    }
}

export default reducer;