import React from 'react';
import {GlobalIcon} from '../../style';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';
import {Link} from 'react-router-dom';
import {
    WrappedHeader,
    HeaderLogo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    WrappedSearch,
    HotSearch,
    HotSpan,
    ChangeSpan,
    HotHeader,
    HotTag,
    HotTagItem
} from './style';
const showSearch=(show,list,handleMouseEnter,mouseEnter,handleMouseLeave,handleChangeClick,
                  page,pageLength)=>{
    let changeSpin=null;
    if(show || mouseEnter){
        const pageData=[];
        for(let i=(page-1)*6;i<page*6;i++){
            pageData.push((<HotTagItem key={i}>{list.get(i)}</HotTagItem>))
        }
        return (
            <HotSearch onMouseEnter={handleMouseEnter}
                       onMouseLeave={handleMouseLeave}
            >
                <HotHeader>
                    <HotSpan>热门搜索</HotSpan>
                    <i className="iconfont spin" ref={(dom)=>{changeSpin=dom}}>&#xe606;</i>

                    <ChangeSpan onClick={()=>{handleChangeClick(page,pageLength,changeSpin)}}>换一批</ChangeSpan>
                </HotHeader>
                <HotTag>
                    {pageData}
                </HotTag>
            </HotSearch>
        )
    }
};
const Header=(props)=>{
    const {loginStatus}= props;
    return (
       <div>
           <GlobalIcon/>
          <WrappedHeader>
              <Link to='/'>
                  <HeaderLogo/>
              </Link>
              <Nav>
                  <NavItem className="left active">首页</NavItem>
                  <NavItem className="left">下载App</NavItem>
                  <NavItem className="right">
                      <i className="iconfont">&#xe636;</i>
                  </NavItem>

                      {
                          !loginStatus?
                              <Link to='/login'>
                          <NavItem className="right">
                              登入
                          </NavItem>
                              </Link>:
                          <NavItem onClick={props.handleLogout}  className="right">
                            退出

                          </NavItem>
                      }



                  <WrappedSearch>
                      <CSSTransition
                          in={props.slide}
                          timeout={1000}
                          classNames='slide'
                      >
                      <NavSearch className={props.slide?'slide':''}
                               onFocus={()=>{props.handleFocus(props.list)}}
                               onBlur={props.handleBlur}/>
                      </CSSTransition>

                      {showSearch(props.slide,props.list,props.handleMouseEnter,
                          props.mouseEnter,props.handleMouseLeave,props.handleChangeClick,
                          props.page,props.pageLength)}

                      <i className={props.slide?'slide iconfont zoom':'iconfont zoom'}>&#xe631;</i>
                  </WrappedSearch>
              </Nav>
              <Addition>
                  <Link to='/write'>
                  <Button>
                      <i className="iconfont">&#xe601;</i>
                      写文章
                  </Button>
                  </Link>
                  <Button>注册</Button>
              </Addition>
          </WrappedHeader>
       </div>
        )
};
const mapStateToProps=(state)=>{
    return {
        slide:state.get('headerReducer').get('slide'),
        list:state.get('headerReducer').get('list'),
        mouseEnter:state.get('headerReducer').get('mouseEnter'),
        page:state.get('headerReducer').get('page'),
        pageLength:state.get('headerReducer').get('pageLength'),
        loginStatus:state.get('loginReducer').get('loginStatus'),
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        handleFocus:(list)=>{
            list.size===0&&dispatch(actionCreators.handleGetList());//不重复获取数据
            dispatch(actionCreators.handleFocus());
        },
        handleBlur:()=>{
            dispatch(actionCreators.handleBlur());
        },
        handleMouseEnter:()=>{
            dispatch(actionCreators.handleMouseEnter());
        },
        handleMouseLeave:()=>{
            dispatch(actionCreators.handleMouseLeave());
        },
        handleChangeClick:(page,pageLength,changeSpin)=>{
            /*
            旋转图标 直接修改transform属性即可.
            */
            let deg=changeSpin.style.transform.replace(/[^0-9]/ig,'');
            if(deg)
                deg=parseInt(deg,10);
            else
                deg=0;
            deg+=360;
            changeSpin.style.transform=`rotate(${deg}deg)`;
            dispatch(actionCreators.handleChangeClick(page,pageLength));
        },
        handleLogout:()=>{
            const action={
                type:'update_login_status',
                status:false,
            };
            dispatch(action);
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);