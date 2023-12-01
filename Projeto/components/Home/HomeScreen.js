import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Footer from '../Rodape/Footer';
import estilos from './estilos';

const HomeScreen = ({ route }) => {
  const numberOfImages = 3;

  const porcentagemSaude = route.params?.porcentagemSaude ?? null;

  const navigation = useNavigation();

    const navigateToDesafios = () => {
      navigation.navigate('Desafios'); 
    };

    const navigateToHealth = () => {
        navigation.navigate('HealthSocial'); 
    };

    const navigateToAlimentacao = () => {
        navigation.navigate('Alimentacao'); 
    };

    const navigateToUser = () => {
        navigation.navigate('UserScreen'); 
    };

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Image source={require('../../assets/miniLogo.png')} style={estilos.logo} />
        {porcentagemSaude !== null && (
          <View style={estilos.saudeContainer(porcentagemSaude)}>
            <Text style={estilos.saudeText}>{`Saúde: ${porcentagemSaude}%`}</Text>
          </View>
        )}
        <TouchableOpacity>
          <Icon name="notifications" type="material-icons" size={34} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={estilos.buttonsContainer}>
        <TouchableOpacity onPress={navigateToDesafios} style={estilos.button}>
          <Text style={estilos.buttonText}>Desafios Saudáveis</Text>
          <Image source={require('../../assets/saude.png')} size={24} />
        </TouchableOpacity>
      </View>

      <Text style={estilos.title}>Recomendações</Text>

      <ScrollView>
        <View style={estilos.rectangleContainer}>
          
          <TouchableOpacity onPress={navigateToAlimentacao} style={estilos.imageContainer}>
            <Image source={require('../../assets/alimentacao.png')} style={estilos.image} />
            <Text style={estilos.imageText}>Alimentação do Dia</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToHealth} style={estilos.imageContainer}>
              <Image source={require('../../assets/social.png')} style={estilos.image} />
              <Text style={estilos.imageText}>Health Social</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToUser} style={estilos.imageContainer}>
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
