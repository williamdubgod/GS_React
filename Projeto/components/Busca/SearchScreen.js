import React from 'react';
import { View, TextInput} from 'react-native';
import { Icon } from 'react-native-elements';
import Footer from '../Rodape/Footer';
import estilos from './estilos';

const SearchScreen = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <View style={estilos.searchContainer}>
          <Icon name="search" type="material-icons" size={24} color="black" style={estilos.searchIcon} />
          <TextInput
            style={estilos.searchInput}
            placeholder="Buscar fornecedores"
            placeholderTextColor="#808080"
          />
        </View>
      </View>

      {/* Conteúdo da tela de pedidos aqui */}

      <Footer />
    </View>
  );
};

export default SearchScreen;
