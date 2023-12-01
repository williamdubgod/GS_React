import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../config/firebase';
import estilos from './estilos';
import Footer from '../Rodape/Footer';

import MagrezaImage from '../../assets/magreza.png';
import IdealImage from '../../assets/ideal.png';
import SobrepesoImage from '../../assets/sobrepeso.png';
import ObesidadeImage from '../../assets/obesidade.png';

export default function UserScreen({ navigation }) {
  const usuario = auth.currentUser;
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);
  const [situacao, setSituacao] = useState('');
  const [camposPreenchidos, setCamposPreenchidos] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate('InicialPage');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = altura / 100;
      const calculoIMC = peso / (alturaMetros * alturaMetros);

      setIMC(calculoIMC.toFixed(1));

      if (calculoIMC < 18.5) {
        setSituacao('Magreza');
      } else if (calculoIMC >= 18.5 && calculoIMC < 24.9) {
        setSituacao('Peso Ideal');
      } else if (calculoIMC >= 25 && calculoIMC < 29.9) {
        setSituacao('Sobrepeso');
      } else {
        setSituacao('Obesidade');
      }

      setCamposPreenchidos(true);

      const porcentagemSaude = calcularPorcentagemSaude(calculoIMC);

      navigation.navigate('HomeScreen', { porcentagemSaude });
    } else {
      setCamposPreenchidos(false);
      setIMC(null);
      setSituacao('');
    }
  };

  const calcularPorcentagemSaude = (imc) => {
    if (imc < 16) {
      return 50;
    } else if (imc >= 16 && imc < 17) {
      return 60;
    } else if (imc >= 17 && imc < 18.5) {
      return 70;
    } else if (imc >= 18.5 && imc < 24.9) {
      return 100;
    } else if (imc >= 25 && imc < 29.9) {
      return 80;
    } else if (imc >= 30 && imc < 34.9) {
      return 60;
    } else if (imc >= 35 && imc < 39.9) {
      return 40;
    } else {
      return 30;
    }
  };

  const getImageSource = (situacao) => {
    switch (situacao) {
      case 'Magreza':
        return MagrezaImage;
      case 'Peso Ideal':
        return IdealImage;
      case 'Sobrepeso':
        return SobrepesoImage;
      case 'Obesidade':
        return ObesidadeImage;
      default:
        return null;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={estilos.container}>
        <View style={estilos.header}>
          <Image source={require('../../assets/user.png')} style={estilos.userIcon} />
          <Text style={estilos.headerText}>{usuario.email}</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Ionicons name="log-out" style={estilos.logoutButtonIcon} />
          </TouchableOpacity>
        </View>

        <Text style={estilos.titulo}>Calcule seu IMC</Text>

        <View style={estilos.formContainer}>

          <Text style={estilos.formLabel}>Peso (kg):</Text>
          <TextInput
            style={estilos.formInput}
            keyboardType="numeric"
            value={peso}
            onChangeText={(text) => setPeso(text)}
            placeholder="Digite seu peso em kg"
            placeholderTextColor="#888"
          />

          <Text style={estilos.formLabel}>Altura (cm):</Text>
          <TextInput
            style={estilos.formInput}
            keyboardType="numeric"
            value={altura}
            onChangeText={(text) => setAltura(text)}
            placeholder="Digite sua altura em cm"
            placeholderTextColor="#888"
          />

          {imc !== null && (
            <View style={estilos.resultadoContainer}>
              <Text style={estilos.resultadoText}>{situacao}</Text>
              <Image
                source={getImageSource(situacao)}
                style={estilos.imagemIlustrativa}
              />
              <Text style={estilos.resultadoText}>IMC: {imc}</Text>
            </View>
          )}

          <TouchableOpacity
            onPress={calcularIMC}
            style={[
              estilos.calcularButton,
              camposPreenchidos && { marginTop: 20 },
            ]}
            disabled={!peso || !altura}
          >
            <Text style={estilos.calcularButtonText}>Calcular IMC</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
}
