import React from 'react';
import Card from './Card';

// Cardlist returns an array of card components
// User object passed as prop from App.js 
const Cardlist = ({ characters }) => {
  return(
    <div className="mw-none center pt6 ph5-ns tc">
      {/* Loop through user object and map id, name and email to Card component */}
      {
        characters.map((character, i) => {
          return(
          <Card 
            key={i}
            id={character.id}
            name={character.name}
          />
          );
        }) 
      }
    </div>
  );
}

export default Cardlist;