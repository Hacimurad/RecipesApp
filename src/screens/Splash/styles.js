import { StyleSheet } from 'react-native';
import colors  from '../../constants/colors';


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%', 
        height: "100%" ,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {

        paddingHorizontal: 15,
        paddingVertical: 60,
   
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        fontWeight: '500',
        marginBottom: 14,
    },
    title: {
        color: colors.white,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500',
    },
    bigtitle: {
        fontSize: 50,
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: colors.white,
        textAlign: 'center',
        marginBottom: 60,
        marginTop: 20,
    }
});

export default styles;