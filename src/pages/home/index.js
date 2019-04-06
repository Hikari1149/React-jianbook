import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from  './store/actionCreators';
import {
    WrappedHome,
    HomeLeft,
    HomeRight,
    BackTop
} from "./style";
import List from './components/List';
import Writer from "./components/Writer";
import Topic from './components/Topic';
import Recommend from "./components/Recommend";

class Home extends React.Component{
    render(){
        const {enoughShow}=this.props;
        return (
            <WrappedHome>
                <HomeLeft>
                    <img className="bannerPic" src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {enoughShow && <BackTop onClick={this.backTop}>回到顶部</BackTop>}
            </WrappedHome>
        )
    }
    componentDidMount(){
        this.props.getHomeData();
        window.addEventListener('scroll',this.props.checkHeight)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.checkHeight);
    }
    backTop=()=>{
        window.scrollTo(0,0);
    }

}
const mapState=(state)=>({
    enoughShow:state.get('homeReducer').get('enoughShow')
});
const mapDispatchToProps=(dispatch)=>{
    return {
        getHomeData:()=>{
            dispatch(actionCreators.getHomeData())
        },
        checkHeight:()=>{
            if(document.documentElement.scrollTop>200){
                dispatch(actionCreators.ToggleShow(true))
            }else{
                dispatch(actionCreators.ToggleShow(false))
            }
        }

    }
}
export default connect(mapState,mapDispatchToProps)(Home);