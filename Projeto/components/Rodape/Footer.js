import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import estilos from './estilos';

export default function Footer() {

    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('HomeScreen'); 
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

    return(
        <View style={estilos.footer}>
            <TouchableOpacity onPress={navigateToHome}>
                <Icon name="home" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToHealth}>
                <Icon name="public" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToAlimentacao}>
                <Icon name="cake" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToUser}>
                <Icon name="account-circle" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

