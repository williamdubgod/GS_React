import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 0.1 * width,
  },
  logo: {
    width: 0.15 * width,
    height: 0.1 * width,
  },
  saudeContainer: (porcentagemSaude) => ({
    backgroundColor: porcentagemSaude > 50 ? '#00FF00' : porcentagemSaude > 30 ? '#FFA500' : '#FF0000',
    width: 0.6 * width, 
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  }),
  saudeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    paddingHorizontal: 0.04 * width,
  },
  button: {
    width: '100%',
    height: 0.20 * width,
    borderRadius: 0.025 * width,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 0.05 * width,
  },
  buttonText: {
    color: 'black',
    marginRight: 0.01 * width,
    fontSize: 18,
  },
  title: {
    fontSize: 0.06 * width,
    fontWeight: 'bold',
    margin: 0.05 * width,
    marginTop: 0.07 * width,
  },
  rectangleContainer: {
    padding: 0.05 * width,
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative', 
    marginTop: 20
  },
  image: {
    width: '100%',
    height: 0.3 * width,
    borderRadius: 10,
  },
  imageText: {
    position: 'absolute', 
    bottom: 10, 
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'white', 
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '90%'
  },
});
