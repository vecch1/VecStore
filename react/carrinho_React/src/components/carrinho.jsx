import React, { useContext } from 'react';
import { CarrinhoContext } from '../context/carrinhoContext';

const Carrinho = () => {
  const { carrinho } = useContext(CarrinhoContext);

  return (
    <div>
      <h2>Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        carrinho.map((produto, index) => (
          <div key={index} className="produto-carrinho">
            <img src={produto.image} alt={produto.name} />
            <h4>{produto.name}</h4>
            <p>{produto.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Carrinho;