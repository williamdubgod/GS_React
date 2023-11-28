import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      alignItems: 'center',
    },
    image: {
      width: 310,
      height: 310,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 40,
    },
    button: {
      backgroundColor: 'black',
      borderRadius: 30,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'white',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });