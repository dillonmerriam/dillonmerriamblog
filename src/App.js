import './App.scss';
import {  Header, Bio, Contact, Blog } from './components/index.js'


function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="wrapper">
        <div className="content-wrapper">
          <Blog />
          <Contact />
        </div>
        <Bio />
      </div>
    </div>
  );
}

export default App;
