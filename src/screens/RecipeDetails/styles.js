import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(217,217,217,0.5)',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    key: {
        fontSize: 16,
        color:colors.black,
        textTransform: 'capitalize',
    },
    value: {
        fontSize: 12,
        color:colors.lightGrey2,
    },   
    instructionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    index: {
        fontSize: 20,
        color:colors.lightGrey2,
        marginRight: 10,
       
    },
    instructionText: {
        fontSize: 16,
        color:colors.black,
    },   

});

export default styles;