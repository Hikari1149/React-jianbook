import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actionCreators from './store/actionCreators';
import {
    WrappedLogin,
    WrppedLoginForm,
    Input,
    Button
}from './styled';
class Login extends PureComponent{
    render(){
        const {loginStatus}= this.props;
        return (
            !loginStatus?
            <WrappedLogin>
                <WrppedLoginForm>
                  <Input placeholder='账户' ref={(dom)=>{this.account=dom}}/>
                    <Input placeholder='密码' type='password' ref={(dom)=>{this.passWord=dom}}/>
                    <Button onClick={()=>{this.props.handleLogin(this.account,this.passWord)}}>登入</Button>
                </WrppedLoginForm>
            </WrappedLogin>:
                <Redirect to='/'/>
        )
    }
}
const mapState=(state)=>({
    loginStatus:state.getIn(['loginReducer','loginStatus'])
});
const mapDispatch=(dispatch)=>({
    handleLogin(account,password){
       // console.log(account.value,password.value);
        dispatch(actionCreators.handleLogin(account,password))
    },
});

export default connect(mapState,mapDispatch)(Login);