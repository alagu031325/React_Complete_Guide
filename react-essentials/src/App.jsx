//Build process will transform import statements to include image
import reactImg from "./assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Core", "Crucial"];

//maximum index here is 2
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  //javascript expression
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

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
