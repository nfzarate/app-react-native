import {createStore, combineReducers, applyMiddleware} from 'redux'
import CategoryReducer from './reducers/category.reducer'
import ProductReducer from './reducers/products.reducer'
import ListReducer from './reducers/list.reducer'
import thunk from 'redux-thunk'
import orderReducer from './reducers/order.ruducer'
import AuthReducer from './reducers/auth.reducer'
import PlaceReducer from './reducers/place.reducer'

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    products: ProductReducer,
    list: ListReducer,
    order:orderReducer,
    auth:AuthReducer,
    places: PlaceReducer
})

export default createStore(RootReducer,applyMiddleware(thunk))