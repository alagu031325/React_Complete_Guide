// we can wrap this component around forwardRef function if we are using a older version of React
import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ResultModal({ ref, targetTime, remainingTime, onReset}) {
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime/1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    // use this hook to define properties and method that are to be exposed by this component from outside
    useImperativeHandle(ref, () => {
        return {
            // this object is stored in ref - so can be accessible by other components
            open() {
                dialog.current.showModal();
            }
        }
    });

    const dialog = useRef();

    //to shift this jsx to a different place in the dom - div in index.html
    return createPortal(
        // Adding onClose if the dialog is closed via Esc key when onReset will not be triggered
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You lost </h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds</strong>.</p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong>.</p>
            {/* Form within dialog element with method "dialog" will automatically close the 
            dialog when this button is pressed*/}
            <form action="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
        )
}