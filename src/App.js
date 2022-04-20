import './App.scss';
import {  Header, Bio, Content } from './components/index.js'


function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="profileContentWrapper">
        <Content />
        <Bio />
      </div>
    </div>
  );
}

export default App;
