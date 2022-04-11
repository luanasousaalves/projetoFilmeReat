import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import FilmesPopulares from "../src/pages/FilmesPopulares";
import FilmesDetalhes from "./pages/FilmesDetalhes";
import FilmesLancamentos from "./pages/FilmesLancamentos";
import FilmesCartaz from "./pages/FilmesCartaz";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<FilmesPopulares />} />
            <Route path="/filmes/:id" element={<FilmesDetalhes />} />
            <Route path="/filmeslancamentos" element={<FilmesLancamentos />} />
            <Route path="/filmesCartaz" element={<FilmesCartaz />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}
export default App;