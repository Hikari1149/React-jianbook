import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class Write extends Component{
    render(){
        const {loginStatus}=this.props;
        return (
            <div>
            {
                loginStatus ?
            <div>
                this is the place where you can write the article.
            </div>:
                    <Redirect to='/login'/>
            }
            </div>
        )
    }
}
const mapState=(state)=>({
  loginStatus:state.getIn(['loginReducer','loginStatus'])
})
export default connect(mapState,null)(Write);