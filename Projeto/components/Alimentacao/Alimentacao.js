import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Footer from '../Rodape/Footer';
import estilos from './estilos';
import Cabecalho from '../Cabecalho/Cabecalho';

const Alimentacao = () => {
  const [mostrarDieta, setMostrarDieta] = useState(null);

  const toggleDieta = (tipoDieta) => {
    setMostrarDieta(mostrarDieta === tipoDieta ? null : tipoDieta);
  };

  const renderizarDieta = (titulo, descricao) => {
    return (
      <View style={estilos.dietaContainer}>
        <Text style={estilos.dietaTitulo}>{titulo}</Text>
        <Text style={estilos.dietaTexto}>{descricao}</Text>
      </View>
    );
  };

  return (
    <View style={estilos.container}>
      <Cabecalho titulo='Alimentação' />

      <ScrollView
        contentContainerStyle={estilos.imagemContainer}
        showsVerticalScrollIndicator={false} 
      >
        <TouchableOpacity onPress={() => toggleDieta('Emagrecer')}>
          <Image
            source={require('../../assets/emagrecer.jpeg')}
            style={estilos.imagem}
          />
          
          <Text style={estilos.textoImagem}>Para emagrecer</Text>
        </TouchableOpacity>
        {mostrarDieta === 'Emagrecer' && renderizarDieta('Dieta para Emagrecer', 
          `
      Café da Manhã:
          - 1 porção de aveia cozida com frutas 
            frescas (como morangos ou banana) e 
            uma colher de chá de mel.
          - 1 xícara de leite desnatado ou alternativa 
            de leite não lácteo.

      Lanche da Manhã:
         - 1 maçã ou outra fruta de sua escolha.
         - 1 punhado de nozes ou amêndoas.

      Almoço:
          - 150g de peito de frango grelhado ou 
            assado.
          - 1 porção de quinoa ou arroz integral.
          - Vegetais variados, como brócolis, 
            cenoura e couve.
          - Salada verde com folhas variadas e 
            um molho à base de azeite de oliva.

      Lanche da Tarde:
          - Iogurte grego natural sem açúcar.
          - Um punhado de berries 
            (morangos, mirtilos).

      Jantar:
            - 150g de salmão grelhado.
            - Batata-doce assada.
            - Aspargos ou outro vegetal 
              de sua preferência.

      Ceia (opcional):
            - Um copo de leite desnatado
              ou uma alternativa de leite não lácteo.`)}
          
        <TouchableOpacity onPress={() => toggleDieta('Equilibrada')}>
          <Image
            source={require('../../assets/equilibrada.png')}
            style={estilos.imagem}
          />
          <Text style={estilos.textoImagem}>Para Equilibrar</Text>
        </TouchableOpacity>
        {mostrarDieta === 'Equilibrada' && renderizarDieta('Dieta Equilibrada', 
          `
      Café da Manhã:
          - Omelete com vegetais.
          - 1 fatia de pão integral.
          - 1 xícara de chá verde ou café.

      Lanche da Manhã:
          - Iogurte natural sem açúcar.
          - Um punhado de amêndoas.

      Almoço:
          - 150g de peito de frango grelhado.
          - 1 xícara de quinoa cozida.
          - Vegetais cozidos, como cenoura  
            e brócolis.
          - Salada verde com molho  
            de azeite de oliva.

      Lanche da Tarde:
          - Frutas variadas (maçã, pera, uvas).

      Jantar:
          - 150g de peixe assado.
          - Batatas assadas.
          - Espargos ou vagem cozida.

      Ceia (opcional):
          - Chá de ervas.`)}
        
        <TouchableOpacity onPress={() => toggleDieta('Engordar')}>
          <Image
            source={require('../../assets/engordar.jpeg')}
            style={estilos.imagem}
          />
          <Text style={estilos.textoImagem}>Para engordar</Text>
        </TouchableOpacity>
        {mostrarDieta === 'Engordar' && renderizarDieta('Dieta para Engordar', 
          `
      Café da Manhã:
          - Smoothie de banana e abacate.
          - 2 fatias de pão integral com pasta 
            de amendoim.
          - Leite integral.

      Lanche da Manhã:
          - 1 banana com amêndoas.

      Almoço:
          - 150g de carne vermelha magra.
          - 1 xícara de arroz branco.
          - Legumes cozidos, como cenoura 
            e abobrinha.
          - Salada de folhas verdes com molho 
            de iogurte.

      Lanche da Tarde:
          - Iogurte grego com granola e mel.

      Jantar:
          - 150g de frango assado.
          - Purê de batata.
          - Brócolis cozidos.

      Ceia (opcional):
          - Um copo de leite integral.`)}
      </ScrollView>

      <Footer />
    </View>
  );
};

export default Alimentacao;
