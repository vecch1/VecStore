import React from 'react';
import { CarrinhoProvider } from './context/carrinhoContext';
import Carrinho from './components/carrinho';
import Produto from './components/produto';
import './App.css';

const App = () => {
   const produtos = [
     { image: 'img/r1.jpg', name: 'CrownLux', price: 'R$1.500' },
     { image: 'img/r2.webp', name: 'WatchTech', price: 'R$500' },
     // Adicione mais produtos aqui
   ];
 
   return (
     <CarrinhoProvider>
       <div className="app">
         <h1>VecStore</h1>
         <div className="produtos">
           {produtos.map((produto, index) => (
             <Produto key={index} produto={produto} />
           ))}
         </div>
         <Carrinho />
       </div>
     </CarrinhoProvider>
   );
 };
 
 export default App;