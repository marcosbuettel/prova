import React, { useState, useEffect } from 'react';

const CardReceitas = (props) => {
  const buscarReceitas =
    props.receitas &&
    props.receitas.map((receita) => {
      return <p>{receita.nome}</p>;
    });

  return <>{buscarReceitas}</>;
};

export default CardReceitas;
