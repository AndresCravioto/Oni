import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/global/Navbar.js';
import Home from './components/Pages/Home.js';
import Categories from './components/Pages/Categories';
import CreateCategory from './components/Pages/CreateCategory';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import Profile from './components/Pages/Profile';
import MemePage from './components/Pages/MemePage.js';
import '../src/styles/memepage.css';
import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bulma-social/bin/bulma-social.min.css'

export const AuthContext = React.createContext('hola');

function App() {

  const [loginState, setLoginState] = useState(
    {
      token: '',
      username: '',
      userId: '',
    }
  )


return (
    <AuthContext.Provider value = {{loginState, setLoginState}}>
      <div className="App mainBackground">
        <Navbar/>
        <Switch>
          <Route exact path='/' render={() => <Home/>}/>
          <Route exact path='/categories' render={() => <Categories/>}/>
          <Route exact path='/login' render={() => <Login/>}/>
          <Route exact path='/signup' render={() => <Signup/>}/>
          <Route exact path='/profile' render={() => <Profile/>}/>
          <Route exact path='/meme' render={() => <MemePage/>}/>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}
export default App;