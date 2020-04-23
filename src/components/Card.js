import React from 'react';

const Card = ({ name }) => {
  return(
    // Style for card uses tachyons instead of creating css file.
    //
    <article className="dib br2 pa3 ma3 b--black-30 grow shadow-4">
      <div className="flex items-right">
        <img className="self-center br-100 h3 w3 ba bw2 b--black-40 pa2 bg-washed-blue" 
          alt='robots'
          // dicebear.com used to generated random avatars for cards
          src={`https://avatars.dicebear.com/v2/bottts/${name}.svg`} 
        />
        <div className="f4 ma2 pa2 tc white">
          <h3>{name}</h3>
        </div>
      </div>
    </article>
  );
}

export default Card;