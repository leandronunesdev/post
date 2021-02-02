import axios from 'axios';
import React, { useRef, useState } from 'react';
import './App.css';

function App() {

  let inputNome = useRef<HTMLInputElement>(null)
  let inputIdade = useRef<HTMLInputElement>(null)
  let inputEmpresa = useRef<HTMLInputElement>(null)
  let inputTelefone = useRef<HTMLInputElement>(null)

  const [cadastrou, setCadastrou] = useState<String>('')

  const enviarFormulario = () => {
    const nome = inputNome.current?.value
    const idade = inputIdade.current?.value
    const empresa = inputEmpresa.current?.value
    const telefone = inputTelefone.current?.value  

    axios.post("http://localhost:4000/usuarios", {
      name: nome,
      age: idade,
      company: empresa,
      phone: telefone
    })  
    .then(resposta => {
      if(resposta.status === 201) {
        setCadastrou('Cadastro realizado com sucesso :)')
      }
    }) 
    
  }

  

  return (
    <div className="App">
      <input type="text"placeholder="Digite seu nome" ref={inputNome} /> 
      <input type="text"placeholder="Digite sua idade" ref={inputIdade} /> 
      <input type="text"placeholder="Digite sua empresa" ref={inputEmpresa} /> 
      <input type="text"placeholder="Digite seu telefone" ref={inputTelefone} />  
      <button onClick={enviarFormulario}>Enviar</button>  
      <p>{cadastrou}</p>  
    </div>
  );
}

export default App;
