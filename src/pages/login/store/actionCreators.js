import axios from 'axios';

export const handleLogin=(account,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
            //console.log(res.data.success);
            let flag=false;
            if(res.data.success)flag=true;
            const action={
                type:'update_login_status',
                status:flag,
            };
            dispatch(action);
        })
    }
};