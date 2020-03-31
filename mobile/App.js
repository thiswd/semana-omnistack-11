// Internacionalização
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
// import { Text, View } from 'react-native';

import Routes from './src/routes';

// A tag View pode ser usada para qualquer tipo de container
// A tag Text é usada para qualquer tipo de texto
// Todos elementos do react native tem display flex por padrão
// Não existe herança de estilos no react native

export default function App() {
  return (
    <Routes />
  );
}
