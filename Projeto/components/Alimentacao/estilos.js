import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cabecalho: {
    backgroundColor: 'black',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloCabecalho: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagemContainer: {
    flexDirection: 'column', 
    alignItems: 'center',
    marginVertical: width * 0.09,
  },
  imagem: {
    width: 0.85 * width,
    height: 0.4 * width,
    borderRadius: 10,
    marginBottom: 40
  },
  textoImagem: {
    position: 'absolute',
    width: '80%',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    top: '80%',
    left: 10,
    transform: [{ translateY: height * -0.05 }],
    zIndex: 1,
    textAlign: 'center'
  },  
  dietaContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: 0.85 * width,
    marginBottom: 20
  },
  dietaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dietaTexto: {
    fontSize: 14,
  },
});
