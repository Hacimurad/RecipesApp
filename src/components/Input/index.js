import React from "react";
import {Image, TextInput, View,Pressable } from "react-native";
import colors from "../../constants/colors";
import styles from "./styles";

const Input=({showSearchIcon,placeholder,pressable,onPress,style,...props})=>{

    const renderInput=()=>(
      <View style={[styles.container,style]}>
        {showSearchIcon ? (
             <Image style={styles.icon} source={require('../../../assets/search.png')}></Image> 
        ) : null}
        <TextInput {...props} editable={!pressable} placeholderTextColor={colors.lightGrey} placeholder={placeholder} style={styles.textInput}></TextInput>
       </View>
    )

    if(pressable){
        return (
            <Pressable onPress={onPress}>
                {renderInput()}
            </Pressable>
        )
    }
    return renderInput();
}

Input.defaultProps = {
    placeholder: "Search Recipe",
    showSearchIcon: true,
};

export default React.memo(Input) ;
