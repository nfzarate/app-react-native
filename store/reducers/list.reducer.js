import {ADD_ITEM,REMOVE_ITEM,CONFIRM_LIST} from '../actions/list.action'

const INITIAL_STATE = {
    items: [],
    total: 0
}

const sumTotal= (list) => list
.map(item => item.quantity * item.price)
.reduce((a,b) => a + b, 0)

const ListReducer = (state= INITIAL_STATE,action)=>{
    switch(action.type) {
        case ADD_ITEM:
            let updatedList = [];

            if (state.items.find(item => item.id === action.item.id)) {
                updatedList = state.items.map(item => {
                    if (item.id === action.item.id) item.quantity++;
                    return item;
                })
            } else {
                const item = {...action.item, quantity: 1}
                updatedList = [...state.items, item]
            }

            return {
                ...state,
                items: updatedList,
                total: sumTotal(updatedList)
            }
        case REMOVE_ITEM:
            const filteredList = state.items.filter(item => item.id !== action.itemID);
            return {
                ...state,
                items: filteredList,
                total: sumTotal(filteredList)
            }
        case CONFIRM_LIST:
            if(action.confirm) {
                return {
                    ...state,
                    items: [],
                    total: 0
                }
            }
        default:
            return state
    }
}

export default ListReducer;