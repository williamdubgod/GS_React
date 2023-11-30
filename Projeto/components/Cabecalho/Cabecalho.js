import React from 'react';
import { View, Text } from 'react-native';
import estilos from './estilos';

const Cabecalho = ({ titulo }) => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>{titulo}</Text>
    </View>
  );
};

export default Cabecalho;