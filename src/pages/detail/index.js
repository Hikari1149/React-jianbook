import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';
import {withRouter} from 'react-router-dom';
import {
    WrappedDetail
}from './style';
class Detail extends Component{
    render(){
        const {title,content}=this.props;
        //console.log(this.props);
        return (
            <WrappedDetail>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html:content}}/>
            </WrappedDetail>

        )
    }
    componentDidMount(){
        this.props.getDetailData(this.props.match.params.id);
    }
}
const mapState=(state)=>({
   title:state.getIn(['detailReducer','title']),
   content:state.getIn(['detailReducer','content']),
});
const mapDispatch=(dispatch)=>{
    return {
        getDetailData:(urlId)=>{
            dispatch(actionCreators.getDetailData(urlId))
        }
    }
}
export default connect(mapState,mapDispatch)(withRouter(Detail));
