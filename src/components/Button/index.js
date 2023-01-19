import React from "react";
import {Text, TouchableOpacity,Image } from "react-native";
import styles from "./styles";

const Button=({children,onPress})=>{
    return(
       <TouchableOpacity onPress={onPress} style={styles.container}>
         <Text style={styles.text}>{children}</Text>
         <Image style={styles.icon} source={require('../../../assets/arrowRight.png')}></Image>
       </TouchableOpacity>
    )
}

export default React.memo(Button) ;
