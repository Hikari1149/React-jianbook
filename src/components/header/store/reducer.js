import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
const defaultState=fromJS({
    slide:false,
    list:[],
    mouseEnter:false,
    page:1,
    pageLength:0
});
export default (state=defaultState,action)=>{
    if(action.type===actionTypes.set_slide_true){
        //set:要更新的值开辟新的内存空间,可持久化(共享旧的部分)
        return state.set('slide',true);
    }
    if(action.type===actionTypes.set_slide_false){
        return state.set('slide',false);
    }
    if(action.type===actionTypes.get_hotList){
        //console.log(action.dataLength);
        return state.set('list',action.data).set('pageLength',action.dataLength);
    }
    if(action.type===actionTypes.setMouseEnter_true){
        return state.set('mouseEnter',true);
    }
    if(action.type===actionTypes.setMouseEnter_false){
        return state.set('mouseEnter',false);
    }
    if(action.type===actionTypes.update_page){
        let nxtPage=action.page+1;
        if(nxtPage>action.pageLength)   nxtPage=1;
        return state.set('page',nxtPage);
    }
    return state;
}