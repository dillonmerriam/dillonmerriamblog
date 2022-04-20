import './App.scss';
import {  Header, Bio, Contact } from './components/index.js'


function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="profileContentWrapper">
        <Contact />
        <Bio />
      </div>
    </div>
  );
}

export default App;
