import {combineReducers} from 'redux-immutable';
import headerReducer from '../components/header/store/reducer';
import homeReducer from '../pages/home/store/reducer';
import detailReducer from '../pages/detail/store/reducer';
import loginReducer from '../pages/login/store/reducer';
//在每个子reducer中 查找匹配的action.
const rootReducer=combineReducers({
    headerReducer,
    homeReducer,
    detailReducer,
    loginReducer,
});
export default rootReducer;