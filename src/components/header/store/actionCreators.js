import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';
const getHotList=(data,len)=>({
        type:'get_hotList',
        data:fromJS(data),
        dataLength:len,
});
export const handleFocus=()=>({
    type:actionTypes.set_slide_true
});
export const handleBlur=()=>({
    type:actionTypes.set_slide_false
});
export const handleGetList=()=>{
    return (dispatch)=>{
        //在thunk处异步请求数据
        axios.get('/api/hotList.json').then((res)=>{
            const len=Math.ceil(res.data.data.length/6);//ceil
            dispatch(getHotList(res.data.data,len));
        }).catch((error)=>{console.log(error)});
    }
};
export const handleMouseEnter=()=>({
    type:actionTypes.setMouseEnter_true,
});
export const handleMouseLeave=()=>({
   type:actionTypes.setMouseEnter_false,
});
export const handleChangeClick=(page,pageLength)=>({
    type:actionTypes.update_page,
    page,
    pageLength,
});