import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from './estilos';
import Image1 from '../../assets/logo.png'

const InicialPage = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('LoginScreen');
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={[estilos.container, { backgroundColor: '#97D8BA' }]}>
      <View style={estilos.imageContainer}>
        <Image source={Image1} style={estilos.image} />
      </View>
      <View style={estilos.buttonContainer}>
        <TouchableOpacity onPress={handleLoginPress} style={[estilos.button, { width: 160, height: 60, opacity: 0.5 }]}>
          <Text style={estilos.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegisterPress} style={[estilos.button, { width: 160, height: 60 }]}>
          <Text style={estilos.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InicialPage;
