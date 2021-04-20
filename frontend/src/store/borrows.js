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

export const setOne = (owner_id, borrower_id, lent, item_id) => async (dispatch) => {

    const response = await fetch(`/api/borrows`, {
        method: "POST",
        body: JSON.stringify({
            owner_id, 
            borrower_id,
            lent,
            item_id
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
                    borrower_name: borrow.Borrower.username,
                    returned: borrow?.returned,
                    owner_id: borrow.owner_id,
                    borrower_id: borrow.borrower_id,
                    item_id: borrow.item_id
                };
            });
            return newState;
        case ADD_ONE:
            newState = {...state};
            newState[action.payload] = {
                lent: action.payload.lent,
                returned: action.payload?.returned,
                borrower_id: action.payload.borrower_id,
                owner_id: action.payload.owner_id,
                item_id: action.payload.item_id,
            }
            return newState;
        default:
            return state;
    }
}

export default reducer;