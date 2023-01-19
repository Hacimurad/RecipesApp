import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'
const styles = StyleSheet.create({
    items :{
        fontSize: 20,
        color:colors.green,
        fontWeight:'bold',paddingVertical:2,
        padding:10,
        paddingHorizontal:12,
        textTransform:'capitalize'
    },
    selectedItem:{
        color:colors.white
    },
    itemsContainer:{
        marginRight: 17,
        marginVertical: 14,
    },
    selectedItemsContainer:{
        backgroundColor:colors.green,
        borderRadius:10
    }
})
export default styles