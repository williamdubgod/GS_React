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
import { Picker } from '@react-native-picker/picker';
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
  const [sexo, setSexo] = useState('M');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);
  const [situacao, setSituacao] = useState('');
  const [pickerVisible, setPickerVisible] = useState(false);
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
    } else {
      setCamposPreenchidos(false);
      setIMC(null);
      setSituacao('');
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
          />

          <Text style={estilos.formLabel}>Altura (cm):</Text>
          <TextInput
            style={estilos.formInput}
            keyboardType="numeric"
            value={altura}
            onChangeText={(text) => setAltura(text)}
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
