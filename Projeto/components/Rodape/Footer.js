import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import estilos from './estilos';

export default function Footer() {

    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('HomeScreen'); 
    };

    const navigateToSearch = () => {
        navigation.navigate('SearchScreen'); 
    };

    const navigateToRequests = () => {
        navigation.navigate('RequestScreen'); 
    };

    const navigateToUser = () => {
        navigation.navigate('UserScreen'); 
    };

    return(
        <View style={estilos.footer}>
            <TouchableOpacity onPress={navigateToHome}>
                <Icon name="home" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSearch}>
                <Icon name="public" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToRequests}>
                <Icon name="cake" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToUser}>
                <Icon name="account-circle" type="material-icons" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

