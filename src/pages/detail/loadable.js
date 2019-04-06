import Loadable from 'react-loadable';
import React from 'react';
const LoadableComponent = Loadable({
    loader: () => import('./index.js'),
    loading() {
        return <div>加载中!!!!!!!!!!</div>
    }
});
export default ()=> < LoadableComponent/>

