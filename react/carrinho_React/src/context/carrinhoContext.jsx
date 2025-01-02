import React, { createContext, useState, useEffect } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  
  const [carrinho, setCarrinho] = useState(
    JSON.parse(localStorage.getItem('carrinho')) || []
  );

  
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};