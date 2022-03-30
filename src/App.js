import logo from './logo.svg';
import "./assets/css/style.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Layout from './components/Layout';

function App() {
  return (
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </BrowserRouter>
      </Layout>
  );
}

export default App;
