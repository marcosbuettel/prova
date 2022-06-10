import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const requestAPI = async () => {
    try {
      const cadastroUsuario = await axios.post('https://receitas/signup', {
        body: {
          nome: nome,
          senha: senha,
        },
      });
    } catch (error) {
      console.log('Erro');
    }
  };

  const cadastrarUsuario = () => {
    requestAPI();
  };

  const mudarSenha = (event) => {
    setSenha(event.target.value);
  };

  const mudarNome = (event) => {
    setNome(event.target.value);
  };

  return (
    <>
      <h2>Cadastro</h2>

      <label>Nome:</label>
      <input type="text" value={nome} onChange={mudarNome} />

      <label>Senha:</label>
      <input type="password" value={senha} onChange={mudarSenha} />

      <button onClick={cadastrarUsuario}>Cadastrar</button>
    </>
  );
};

export default Cadastro;
