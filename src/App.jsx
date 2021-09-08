import './App.css';
import Header from './components/header/Header.jsx'
import Mint from './components/mint/Mint.jsx'

function App() {
  return (
    <div className="App">
        <Header/>
        <Mint
          title="Section 1"
          subtitle={"1"}
          dark={true}
          id="section1"
        />
        <Mint
          title="Section 2"
          subtitle={"2"}
          dark={false}
          id="section2"
        />
        <Mint
          title="Section 3"
          subtitle={"3"}
          dark={true}
          id="section3"
        />
    </div>
  );
}

export default App;
