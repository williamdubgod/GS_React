import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Footer from '../Rodape/Footer';
import estilos from './estilos';

const HomeScreen = () => {
  const numberOfImages = 3;

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Image source={require('../../assets/miniLogo.png')} style={estilos.logo} />
        <TouchableOpacity>
          <Icon name="notifications" type="material-icons" size={34} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={estilos.buttonsContainer}>
        <TouchableOpacity style={estilos.button}>
          <Text style={estilos.buttonText}>Desafios Saudáveis</Text>
          <Image source={require('../../assets/saude.png')} size={24} />
        </TouchableOpacity>
      </View>

      <Text style={estilos.title}>Recomendações</Text>

      <ScrollView>
        <View style={estilos.rectangleContainer}>
          
          <TouchableOpacity style={estilos.imageContainer}>
            <Image source={require('../../assets/alimentacao.png')} style={estilos.image} />
            <Text style={estilos.imageText}>Alimentação do Dia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.imageContainer}>
              <Image source={require('../../assets/social.png')} style={estilos.image} />
              <Text style={estilos.imageText}>Health Social</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.imageContainer}>
            <Image source={require('../../assets/imc.png')} style={estilos.image} />
            <Text style={estilos.imageText}>Meu IMC</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};

export default HomeScreen;
