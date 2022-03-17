import { createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import math from '../reducers/math';
const store = createStore(math, applyMiddleware(thunk))
export default store