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

const removeOne = (id) => ({
    type: REMOVE_ONE,
    payload: id
});

export const setOne = (item, userId) => async (dispatch) => {
    const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify({
            item, 
            userId
        }),
    });
    if (response.ok) {
        dispatch(addOne(response));
    };
    return response;
}

export const getItems = (userId) => async (dispatch) => {
    const response = await fetch(`/api/items/${userId}`);
    if (response.ok) {
        // const data = await response.json();
        dispatch(setList(response));
    };
    return response;
};

export const deleteOne = (id) => async (dispatch) => {
    const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        dispatch(removeOne(id))
    }
    return response;
};

export const updateOne = (item, id) => async (dispatch) => {
    const response = await fetch(`/api/items/${id}`, {
        method: "PATCH",
        body: JSON.stringify({item})
    });
    if (response.ok) {
        dispatch(addOne(response))
    };
    return response;
}

function reducer(state = {}, action) {
    let newState = {};
    switch(action.type) {
        case SET_LIST:
            action.payload.data.items.forEach(item => {
                newState[item.id] = {
                    id: item.id,
                    title: item.title,
                    desc: item.desc,
                    imgUrl: item.imgUrl
                };
            });
            return newState;
        case ADD_ONE:
            newState= {... state };
            newState[action.payload.id ] = {
                id: action.payload.id,
                title: action.payload.title, 
                desc: action.payload.desc
            }
            return newState;
        case REMOVE_ONE:
            newState = {... state };
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default reducer;