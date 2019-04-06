import styled from 'styled-components';

export const WrappedHome=styled.div`
    margin:0 auto;
    width:960px;
    overflow:hidden;
    margin-top:10px;
`;
export const HomeLeft=styled.div`
    width:670px;
    float:left;
    .bannerPic{
        width:100%;
    }
`;
export const HomeRight=styled.div`
    width:280px;
    height:200px;
    float:right;
`;
export const WrappedTopic=styled.div`
    min-height:32px;
    margin-top:10px;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:3px dashed #e8e8e8;
    margin-bottom:10px;
`;
export const TopicItem=styled.a`
     border:1px solid #e8e8e8;
     color:#333;
     text-decoration:none;
     line-height:32px;
     float:left;
     margin-left:18px;
     margin-bottom:10px;
     .topicImg{
        float:left;
        height:32px;
     }
`;
export const ListItem=styled.div`
  min-height:140px;
  color:#333;
  text-decoration:none;
  .itemImg{
    height:120px;
    float:right;
    border-radius:20px;
  }
  .content{
    margin-top:20px;
  }
  border-bottom:3px dashed #e8e8e8;
  margin-bottom:10px;
`;
export const RecommendItem=styled.a`
    display:block;
    background-image:url(${(props=>props.imgUrl)});
    background-repeat:no-repeat;
    background-size:contain; 
    height:60px;
`;
export const LoadMore=styled.div`
    background:#999;
    margin:20px 0;
    height:20px;
    border-radius:10px;
    text-align:center;
    cursor:pointer;
`;
export const BackTop=styled.div`
    height:45px;
    width:80px;
    border-radius:25px;
    border:1px solid #333;
    position:fixed;
    bottom:30px;
    right:30px;
    line-height:45px;
    text-align:center;
    cursor:pointer;   
`;
