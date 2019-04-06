import styled from 'styled-components';
import LogoPic from '../../statics/jianshu.png';

export const WrappedHeader=styled.div`
    position:relative;
    height:58px;
    border-bottom:2px solid #eee;
`;

export const HeaderLogo=styled.a.attrs({
    href:'/'
})`
    position:absolute;
    left:0;
    top:0;
    display;block;
    width:100px;
    height:56px;
    background:url(${LogoPic});
    background-size:contain;
`;
export const Nav=styled.div`
    height:58px;
    width:943px;
    margin:0 auto;
`;
export const NavItem=styled.a`
    &.left{
        float:left;
    }
    &.right{
        float:right;
        padding-right:30px;
    }
    &.active{
        color:#ea6f5a;
    }
    display:block;
    height:56px;
    line-height:26px;
    padding:15px;
    font-size:15px;

`;
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
  
    display:inline-block;
    padding:0 45px 0 20px;
    margin-left:23px;
    margin-top:9px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 38px;
    background: #eee;
    outline:none;
    &::placeholder{
        color:#999;
    }
    &.slide-enter{
        transition:all 3s ease-in;
        width:160px;
    }
    &.slide-enter-active{
        width:360px;
    }   
    &.slide-enter-done{
        width:360px;
    }   
    &.slide-exit{
        transition:all 3s ease-in;
        width:360px;
    }
    &.slide-exit-active{
        width:160px;
    }
`;
export const Addition=styled.div`
    position:absolute;
    top:0;
    right:0;
`;
export const Button=styled.button`
   width:80px;
   height:38px;
   float:right;
   border:1px solid rgba(236,97,73,7);
   border-radius:20px;
   display:inline-block;
   background-color:#fff;
   color:#ea6f5a;     
   margin-top:9px;
`;
export const WrappedSearch=styled.div`
    position:relative;
    float:left;
    .zoom{
       position:absolute;
      
       right:5px;
       bottom:5px;
       width:30px;
       height:30px;
       line-height:30px;
       background:#ccc;
       border-radius:30px;
       text-align:center;
    }
`;
export const HotSearch=styled.div`
        width:225px;
        background:#fff;
        position:absolute;
        left:25px;
        border-radius:4px;
        line-height:20px;
    `;
export const HotHeader=styled.div`
        height:20px;
        margin-top:15px;
        margin-left:5px;
        font-size:14px;
        color:#777;
        .iconfont{
            position:absolute;
            right:65px; 
        }
        .spin{
            transform:rotate(0deg);
            transition:all .3s ease-in;
            
        }
`;
export const HotSpan=styled.span`
        padding-left:15px;
`;
export const ChangeSpan=styled.a`
        float:right;
        padding-right:15px;
        text-decoration:none;
`;
export const HotTag=styled.div`
      margin-left:15px;
      margin-top:15px;
`;
export const HotTagItem=styled.span`
    display:inline-block;
    margin-right:10px;
    border-radius:4px;
    margin-top:10px;
    border:1px solid #888;
`;