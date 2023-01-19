import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Categories = ({ categories,selectedCategory,onCategoryPress}) => {
    return (

        <FlatList 
            horizontal
            data={categories}
            keyExtractor = {item => String(item)}
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal:-7,marginTop:10}}
            renderItem = {({ item}) =>{
               const selected = selectedCategory === item;
               const displayName=item?.replace('_',' ');
                return  (
                        <TouchableOpacity onPress={() => onCategoryPress(item)}  style={[styles.itemsContainer,selected  ? styles.selectedItemsContainer:{}]}>
                               <Text style={[styles.items,selected  ? styles.selectedItem:{}]}>{displayName}</Text>
                        </TouchableOpacity>
                     
                    )
            }} />

    );
}


export default React.memo(Categories);