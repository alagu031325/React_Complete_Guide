import { useState } from 'react';

export default function Player() {
  
  const [playerName, setPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    if (!event.target.value) {
      setSubmitted(false);
    }
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome { submitted ? playerName : 'Unknown User'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
