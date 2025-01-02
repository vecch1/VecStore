import React, { useContext } from 'react';
import { CarrinhoContext } from '../context/carrinhoContext';

const Produto = ({ produto }) => {
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  return (
    <div className="produto">
      <img src={produto.image} alt={produto.name} />
      <h4>{produto.name}</h4>
      <p>{produto.price}</p>
      <button onClick={() => adicionarAoCarrinho(produto)}>Comprar</button>
    </div>
  );
};

export default Produto;