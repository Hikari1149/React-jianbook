import {fromJS} from 'immutable';
const defaultState=fromJS({
    title:'',
    content:'',
});
export default (state=defaultState,action)=>{
    switch(action.type) {
        case('init_detail_data'):
            return state.set('title',action.title).set('content',action.content);
        default:
            return state;
    }
}