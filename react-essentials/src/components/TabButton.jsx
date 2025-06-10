// children property within props is automatically set by React
export default function TabButton({children, onClick, isSelected}) {
    return (
        <li>
            <button className={isSelected ? "active" : ""} onClick={onClick}>{children}</button>  
        </li>
    )
}