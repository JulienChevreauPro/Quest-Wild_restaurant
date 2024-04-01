import React from 'react';
import './App.css';
import MenuList from './MenuList';
import {foodItems} from './data.js';

const App = () => {
  return (
    <article>
      <h1>Wild Restaurant Menu</h1>
      <MenuList foodItems={foodItems}/>
    </article>
  );
};

export default App;