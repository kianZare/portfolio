import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects"

function App() {
  return (
    <div >
      <Navbar />
      <Intro />
      <Skills />
<Projects/>
    </div>
  );
}

export default App;
