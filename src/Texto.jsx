import { useState } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 
const Texto = () => {
  const [texto, setTexto] = useState('');
  return (
    <>
      <Link to="/">Volver al home</Link>  
      <h2>Ejemplo de uso de react-markdown</h2>
      
      <textarea 
        value={texto} 
        onChange={e => setTexto(e.target.value)} 
        placeholder="Escribi Markdown aca..."
        cols="40"
        rows="10"
      />
      <Markdown remarkPlugins={[remarkGfm]}>{texto}</Markdown>
    </>
  );
};

export default Texto;