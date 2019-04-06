import {fromJS} from 'immutable';
const defaultState=fromJS({
   loginStatus:false
});
export default (state=defaultState,action)=>{
    switch(action.type){
        case 'update_login_status':
            return state.set('loginStatus',action.status);
        default:
            return state;
    }
}