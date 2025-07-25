import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
// shared across components
// let timer; - so wont work as intended

export default function TimerChallenge({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    // let timer; - wont work as intended since lost when component re-rendered 

    // each component instance will get its own timer ref that works independent of other timer instances - value not lost when component is re-rendered
    const timer = useRef();
    const dialog = useRef();

    // Derived state
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    // so interval is stopped after the timeRemaining becomes 0 or less than 0
    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        // timer is expired - so we lost
        dialog.current.open();
    }

    function handleReset() {
        //resetting the time
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        //store timer reference 
        timer.current = setInterval(() => {
            // detect 10ms so that the state is updated every 10ms
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    // Manually stopped - so we won 
    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
        {/* It is invisible we dont use open attribute in dialog */}
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" remainingTime={timeRemaining} onReset={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                { timerIsActive ? 'Time is running' : 'Timer inactive' }
            </p>
        </section>
        </>
    )
}