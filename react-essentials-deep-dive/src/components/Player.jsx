import { useState } from "react";

export  default function Player({initialName, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const buttonCaption = isEditing ? "Save" : "Edit";

    const handleEditClick = () => {
        setIsEditing((prevState) => !prevState);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {
                    !isEditing && <span className="player-name">{playerName}</span>
                }
                {
                    isEditing && <input type="text" placeholder="Name Pls" required value={playerName} onChange={handleChange}></input>
                }
              
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
          </li>
    )
}