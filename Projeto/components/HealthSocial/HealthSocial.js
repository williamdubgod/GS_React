import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import estilos from './estilos';
import Footer from '../Rodape/Footer';
import Cabecalho from '../Cabecalho/Cabecalho';

const HealthSocial = () => {
  
  const repetitions = 5;

  const renderRepeatedImages = () => {
    const images = [];
    for (let i = 0; i < repetitions; i++) {
      images.push(
        <Image
          key={i}
          source={require('../../assets/health1.png')}
          style={estilos.healthImage}
        />
      );
      images.push(
        <Image
          key={`duplicate-${i}`}
          source={require('../../assets/health2.png')}
          style={estilos.healthImage}
        />
      );
    }
    return images;
  };

  return (
    <View style={estilos.container}>
     
    <Cabecalho titulo={'Health Social'}/>

      {/* Conteúdo com rolagem */}
      <ScrollView contentContainerStyle={estilos.scrollContent}>
        {renderRepeatedImages()}
      </ScrollView>

      <Footer />
    </View>
  );
};

export default HealthSocial;
