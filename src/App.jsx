import './App.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function App() {
  const [cosas, setCosas] = useState([]);
  const [nuevaCosa, setNuevaCosa] = useState('');
  useEffect(() => {
    let cosasGuardadas = JSON.parse(localStorage.getItem('cosas'));
    if (cosasGuardadas) setCosas(cosasGuardadas);
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    let cosasActualizadas = [...cosas, nuevaCosa];
    setCosas(cosasActualizadas);
    localStorage.setItem('cosas', JSON.stringify(cosasActualizadas));
    setNuevaCosa('');
  }
  return (
    <div className="App">
      <h1>Nuevo</h1>  
      <form onSubmit={handleSubmit}>
        <input 
          value={nuevaCosa}
          onChange={e => setNuevaCosa(e.target.value)}
          type="text"
        />
        <input 
          type="submit"
          value="agregar"
        />
      </form>
      <pre>[
        {cosas.map((c,i) => <span key={i}> {c} </span>)}
      ]</pre>
      <Link to="/markdown">Ir a pagina de Markdown</Link>
      <p>Voy a commitear desde github.dev</p>
    </div>
  );
}
