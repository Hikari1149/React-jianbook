import axios from 'axios';

export const getDetailData=(urlId)=>{
    return (dispatch)=>{
        axios.get('/api/detailData.json?id='+urlId).then((res)=>{
            const action={
                type:'init_detail_data',
                title:res.data.title,
                content:res.data.content,
            };
            dispatch(action);
        })
    }

}