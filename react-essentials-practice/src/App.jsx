import UserInput from "./components/ UserInput"
import Header from "./components/Header"
import { useState } from "react"
import Results from "./components/Results";

function App() {

  const [ userInput, setUserInput ] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

  function handleUserInputChange(inputIdentifier, newValue) {
      setUserInput((prevState) => {
          return {
              ...prevState,
              [inputIdentifier]: +newValue
          }
      })
  }

  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header/>
      <UserInput onChangeInput={handleUserInputChange} userInput={userInput}/>
      { inputIsValid && <Results userInput={userInput}/> }
      { !inputIsValid && <p className="center">Please enter valid duration greater than 0</p> }
    </>
  )
}

export default App
