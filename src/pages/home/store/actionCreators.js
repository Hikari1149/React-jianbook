import axios from 'axios';
export const getHomeData=()=> {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            //console.log(res);
            const action = {
                type: 'get_home_data',
                data: res.data.data.recommendList
            };
            dispatch(action);
        })
    }
};
export const loadMoreData=(infoPage)=>{
    return (dispatch)=>{
        axios.get('/api/moreListData.json?page='+infoPage).then((res)=>{
           // console.log(res);
            const action={
                type:'get_more_list_data',
                data:res.data.data.List,
                newInfoPage:infoPage,
            };
            dispatch(action);
        })
    }
};
export const ToggleShow=(flag)=>{
    return {
        type:'change_show_state',
        data:flag
    }
}