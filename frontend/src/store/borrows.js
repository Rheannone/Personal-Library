import { fetch } from './csrf';

const SET_LIST = 'borrows/setList';
const ADD_ONE = 'borrows/addOne';
const REMOVE_ONE = 'borrows/removeOne';

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
                    owner_id: borrow.ownerID,
                    borrower_id: borrow.borrowerId,
                    item_id: borrow.itemid
                };
            });
            return newState;
        case ADD_ONE:
            newState = {...state};
            newState[action.payload] = {
                lent: action.payload.lent,
                returned: action.payload?.returned,
                borrower_id: action.payload.borrowerId,
                owner_id: action.payload.ownerId,
                item_id: action.payload.itemid,
            }
            return newState;
        default:
            return state;
    }
}

export default reducer;