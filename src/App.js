import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Pages/Home.js';
import Categories from './components/Pages/Categories.js';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
        <Route exact path='/categories' render={() => <Categories/>}/>
      </Switch>
    </div>
  );
}

export default App;
