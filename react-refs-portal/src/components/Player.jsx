import { useState, useRef } from 'react';

export default function Player() {
  // We can attach the refs to jsx elements - it returns js object that has "current" property
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null); 

  function handleClick() {
    // "current" stores ac  tual ref value (connected input) - and we can access all the input element's
    // methods and properties
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ? enteredPlayerName : 'Unknown User'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
