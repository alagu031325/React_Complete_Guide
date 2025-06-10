import reactImg from "../../assets/react-core-concepts.png";
// This styles are not restricted to this component it will still be applied to any header element 
import './Header.css';

const reactDescriptions = ["Fundamental", "Core", "Crucial"];

//maximum index here is 2
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  //javascript expression can be embedded within {} inside JSX to embed dynamic content
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      {/* javascript variable that includes the path to that image */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}