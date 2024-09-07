import logo from './logo.svg';
import './App.css';
import EmpInfo from './component/EmpInfo'
import Cardshow from './component/Cardshow';
import Registration from './component/Registration';

function App() {
  return (
    <div className="App">
      <section>
        <h1 class='reg'>Using Table</h1>
   <EmpInfo/>
   <br/>
   <br/>
   </section>
   <section>
   <br/>
    <br/>
    <h1 class='reg' >Using Card</h1>
   <Cardshow/>
   </section>
   <section>
    <br/>
    <br/>
    <h1 class='reg'>Using Textfields and Buttons</h1>
    <Registration/>
   </section>
    </div>
  );
}

export default App;
