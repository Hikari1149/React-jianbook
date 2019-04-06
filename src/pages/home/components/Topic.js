import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    WrappedTopic,
    TopicItem
}from '../style';
class Topic extends PureComponent{
    render(){
        const {list}=this.props;
        return (
            <div>
                <WrappedTopic>
                    {
                        list.map((item)=>{
                            return <TopicItem key={item.get('id')}>
                                <img className='topicImg' src={item.get('imgUrl')}/>
                                <span>{item.get('title')}</span>
                            </TopicItem>
                        })
                    }

                </WrappedTopic>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        list: state.get('homeReducer').get('list')
    }
}
export default connect(mapStateToProps,null)(Topic);