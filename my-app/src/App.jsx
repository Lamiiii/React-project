
import './App.css';
import { Header } from './Header/Haeder';
import {Learn} from './Learn/Learn';
import {Features} from './Features/Features';
import {About} from './About/About';
import {Services} from './Services/Services';
import {Gallery} from './Gallery/Gallery';
import {Meet} from './Meet/Meet';
import { Info } from './Info/Info';
import { Footer } from './Footer/Footer';
function App() {
  return (
    <div className="App">
     <div className='row'>
     <Header/>
     <Learn/>
     <Features/>
     <About/>
     <Services/>
     <Gallery/>
     <Meet/>
     <Info/>
     <Footer/>
     
     </div>
    </div>
  );
}

export default App;
