// Default value set for component Identifier
export default function Tabs({ children, buttons, buttonsContainer = "menu"}) {
    // component identifier passed as a prop - to dynamically render different html wrapper 
    const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}