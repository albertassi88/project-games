import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import GamesPlay from './pages/GamesPlay';
import TodoProvider from './context/TodoProvider';

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/:name' component={GamesPlay}/>
        </Switch>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
