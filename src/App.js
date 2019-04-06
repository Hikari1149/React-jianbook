import React, { Component } from 'react';
import "antd/dist/antd.css";
import Header from "./components/header";
import {GlobalStyled}  from "./style";
import {Provider} from 'react-redux';
import store from './store/store';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home/index';
import Detail from './pages/detail/loadable';
import Login from './pages/login/index';
import Write from './pages/write/index';
class App extends Component {
  render() {
    return (
        <Provider store={store}>
           <div>
                <GlobalStyled/>
                <BrowserRouter>
                    <Header/>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/detail/:id' component={Detail}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/write' component={Write}></Route>
                </BrowserRouter>
           </div>
        </Provider>
    );
  }
}

export default App;
