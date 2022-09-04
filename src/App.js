import './App.css';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';
import ForthScreen from './components/ForthScreen';
import FifthScreen from './components/FifthScreen';
import Landing from './components/Landing';



function App() {
  return (
    <div className="App">
       <Landing/>
        <FirstScreen/>
        <SecondScreen/>
        <ThirdScreen/>
        <ForthScreen/>
        <FifthScreen/>
    </div>
  );
}

export default App;
