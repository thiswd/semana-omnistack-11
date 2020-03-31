import React, { useState } from 'react';
import './global.css';
import Header from './Header';
// import Logon from './pages/Logon'; // Ao importar uma pasta, o sistema procura um arquivo index
import Routes from './routes';


function App() {
  // const [counter, setCounter] = useState(0);
  // // Retorna um array [valor, função de atualização]

  // function increment() {
  //   setCounter(counter + 1);
  // }

  // return (
  //   <div>
  //     <Header>Contador: {counter}</Header>
  //     <button onClick={increment}>Incrementar</button>
  //   </div>
  // );

  return (
    <Routes />
  );
}

export default App;
