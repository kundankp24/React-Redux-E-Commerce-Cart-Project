import Headers from './components/Headers';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import CardsDetail from './components/CardsDetail';
import CardTemplate from './components/CardTemplate';


function App() {
  return (
    <>
    <Headers/>
    <Routes>
      <Route path='' element={<CardTemplate/>}/>
      <Route path='/cart/:id' element={<CardsDetail/>}/>
    </Routes>
    </>
  );
}

export default App;
