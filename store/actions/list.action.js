import {URL_API} from '../../constants/database'

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_LIST = 'CONFIRM_LIST';

export const addItem = item => ({
    type: ADD_ITEM,
    item
})

export const removeItem = itemID => ({
    type: REMOVE_ITEM,
    itemID
})

export const confirmList = (payload, total) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}ordenes.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: payload,
                    total
                }),
            });

            const result = await response.json();

            dispatch({
                type: CONFIRM_LIST,
                confirm: true
            });
        } catch(error) {
            console.log(error.message)
        }
    }
}