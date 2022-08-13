import React from 'react';
import { Provider } from 'react-redux';
// import { gapi } from 'gapi-script';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './state/store';
import './App.css';
// import Principal from './components/Principal';
// import Login from './components/Login/Login';
// import LogOut from './components/Logout/Logout';
import LoginView from './pages/Login/Login';
import MenuView from './pages/Menu/Menu';
import UserView from './pages/Users/Users';
import PostsView from './pages/Posts/Posts';
import 'antd/dist/antd.css';

function App() {

  return (
    <div className="principal-container">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/menu" component={MenuView} />
            <Route exact path="/users" component={UserView} />
            <Route exact path="/posts" component={PostsView} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );

}

export default App;
