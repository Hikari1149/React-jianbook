import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {
    ListItem,
    LoadMore
}from '../style';
import {Link} from 'react-router-dom';
class List extends PureComponent{
    render(){
        const {infoList,loadMoreData,infoPage}=this.props;
        return (
          <div>
              {
                  infoList.map((item,key)=>{
                      return <Link key={key}  to={'/detail/'+item.get('id')}>
                            <ListItem >
                          <img className="itemImg"
                               src={item.get('imgUrl')}
                               alt="120"/>
                          <a>{item.get('title')}</a>
                          <p className='content'>{item.get('content')}</p>
                      </ListItem>
                      </Link>
                  })
              }
              <LoadMore onClick={()=>loadMoreData(infoPage)}>加载更多</LoadMore>
          </div>
        )

    }
}
const mapStateToProps=(state)=>({
    infoList:state.get('homeReducer').get('infoList'),
    infoPage:state.get('homeReducer').get('infoPage')
});
const mapDispatchToProps=(dispatch)=>{
    return {
        loadMoreData:(infoPage)=>{
            dispatch(actionCreators.loadMoreData(infoPage+1))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(List);