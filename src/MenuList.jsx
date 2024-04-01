import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  
  return (
    <>
      {foodItems.map((foodItem) => <MenuItem key={foodItem.itemName} foodItem={foodItem}/>)}
    </>
  );
}

export default MenuList;