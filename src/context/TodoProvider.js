import React, { useState, useEffect } from 'react';
import { apiPlayGamesCategory } from '../services/apiPlayGames';
import TodoContext from './TodoContext';

function TodoProvider({ children }) {
  const [apiGames, setApiGames] = useState([]);
  const [category, setCategory] = useState('anime');
  const [gameDetails, setGameDetails] = useState([]);

  useEffect(() => {
    apiPlayGamesCategory(category)
    .then(game => {
      setApiGames(game);
    }).catch(() => {
      alert("Ocorreu um erro ao buscar os items");
    });
  }, [category]);

  const context = {
    apiGames,
    setApiGames,
    category,
    setCategory,
    setGameDetails,
    gameDetails,
  };

  return (
    <div>
      <TodoContext.Provider value={ context }>
        {children}
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;