import {fromJS} from 'immutable';
const defaultState=fromJS({
    list:[{
        id:1,
        title:'程序员0',
        imgUrl:"//upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp",

    },{
        id:2,
        title:'程序员1',
        imgUrl:"//upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp",
    }],
    infoList:[
        {
            id:1,
            title:'This is not the sandwich you want',
            content:'春卷又称春饼、春盘或薄饼，是一种传统美食。民间有立春吃春卷的习俗，就像端午节吃粽子，大年三十吃饺子一样，千百年来代代延续下来。 春卷有迎接新春的...',
            imgUrl:"//upload-images.jianshu.io/upload_images/9602437-4f17381e1affc6f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
        },
        {
            id:2,
            title:'This is not the sandwich you want',
            content:'春卷又称春饼、春盘或薄饼，是一种传统美食。民间有立春吃春卷的习俗，就像端午节吃粽子，大年三十吃饺子一样，千百年来代代延续下来。 春卷有迎接新春的...',
            imgUrl:"//upload-images.jianshu.io/upload_images/9602437-4f17381e1affc6f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
        }
    ],
    recommendList:[],
    infoPage:1,
    enoughShow:false,

});
export default (state=defaultState,action)=>{
    switch(action.type){
        case 'get_home_data':
            return state.set('recommendList',fromJS(action.data));
        case 'get_more_list_data':
            return state.set('infoList',state.get('infoList').concat(fromJS(action.data))).set('infoPage',action.newInfoPage)
        case 'change_show_state':
            return state.set('enoughShow',action.data);
        default:
            return state;
    }
}