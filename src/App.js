import './App.css';
import Header from "./Components/Header/Header";
import Pricing from './Components/Pricing/Pricing';
import Samples from './Components/Samples/Samples';

function App() {
  return (
    <div className="App">
        <Header/>
        <Samples/>
        <Pricing/>
        
    </div>
  );
}

export default App;
