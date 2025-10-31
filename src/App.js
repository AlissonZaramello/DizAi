import logo from './logo.svg';
import './App.css';
import AuthProvider from './contexto/authcontexto';
import Rotas from './rotas/rotas';

function App() {
  return (
    <>
      <AuthProvider>
        <Rotas/>
      </AuthProvider>
    </>
  );
}

export default App;
