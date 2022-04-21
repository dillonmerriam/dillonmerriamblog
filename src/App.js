import './App.scss';
import {  Header, Bio, Contact, Blog } from './components/index.js'


function App() {
  return (
    <div className="App">
    <Header /> 
    <div className="wrapper"> 
      <div className="content-wrapper">
        <Blog />
      </div>
      <div className="bio-wrapper">
        <Bio />
      </div> 
    </div>
      <div className='contact-wrapper'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
