import React from 'react';
import { View, Text } from 'react-native';
import estilos from './estilos';
import Footer from '../Rodape/Footer';
import Cabecalho from '../Cabecalho/Cabecalho';

const Desafios = () => {

  return (
    <View style={estilos.container}>
      <Cabecalho titulo='Desafio Diário' />

      <View style={estilos.desafioContainer}>
        <Text style={estilos.tituloDesafio}>Desafio Diário de Saúde:</Text>
        <Text style={estilos.subtitulo}>Realizar uma caminhada de 30 minutos a qualquer hora do dia.</Text>

        <Text style={estilos.beneficiosTitulo}>Benefícios:</Text>
        <Text style={estilos.itemLista}>- Melhora da saúde cardiovascular.</Text>
        <Text style={estilos.itemLista}>- Aumento da energia e disposição.</Text>
        <Text style={estilos.itemLista}>- Redução do estresse e ansiedade.</Text>
        <Text style={estilos.itemLista}>- Estímulo à perda de peso e manutenção do peso saudável.</Text>

        <Text style={estilos.dicasTitulo}>Dicas:</Text>
        <Text style={estilos.itemLista}>- Escolha um horário conveniente para caminhar, seja de manhã, à tarde ou à noite.</Text>
        <Text style={estilos.itemLista}>- Use tênis confortáveis.</Text>
        <Text style={estilos.itemLista}>- Comece com um ritmo moderado e, se possível, aumente a intensidade gradualmente ao longo do tempo.</Text>
        <Text style={estilos.itemLista}>- Seja consistente, mesmo em dias mais ocupados. A caminhada pode ser dividida em períodos mais curtos, se necessário.</Text>
      </View>

      <Footer />
    </View>
  );
};

export default Desafios;
