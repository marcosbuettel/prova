import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardReceitas from './CardReceitas';

const Receitas = () => {
  const [listaReceitas, setListaReceitas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('E');

  const requestApi = async () => {
    setIsLoading(true);
    try {
      const receitas = await axios.get('https://receitas/?limit=4');
      setListaReceitas(receitas.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError('Erro');
    }
  };

  useEffect(() => {
    requestApi();
  }, []);

  return (
    <>
      <h2>Receitas</h2>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && error && <p>Erro ao fazer a requisição!</p>}
      {!isLoading && <CardReceitas receitas={listaReceitas} />}
    </>
  );
};

export default Receitas;
