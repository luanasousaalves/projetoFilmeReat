import { BrowserRouter,Routes, Route } from 'react-router-dom';
import FilmesPopulares from '../src/pages/FilmesPopulares'
import Menu from './components/Menu';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<FilmesPopulares />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
