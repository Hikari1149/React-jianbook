import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    RecommendItem
}from '../style';
class Recommend extends PureComponent{
    render(){
        const {recommendList}=this.props;
        return (
            <div>
                {recommendList.map((item)=>{
                    return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                })}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    recommendList:state.get('homeReducer').get('recommendList')
});
export default connect(mapStateToProps,null)(Recommend);