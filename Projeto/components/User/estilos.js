import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 30,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  headerText: {
    marginTop: 20,
    color: '#fff',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  userIcon: {
    marginTop: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  logoutButtonIcon: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
  },
  titulo: {
    fontSize: 34,
    marginTop: 20,
    textAlign: 'center'
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  formLabel: {
    fontSize: 16,
  },
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  pickerContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    flex: 1,
  },
  calcularButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  calcularButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagemIlustrativa: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: 'contain',
  },  
  resultadoContainer: {
    alignItems: 'center',
  },  
  resultadoText: {
    fontSize: 18,
    marginTop: 10,
  },
});
