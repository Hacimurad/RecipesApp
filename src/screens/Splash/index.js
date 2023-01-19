import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";

import Button from "../../components/Button";

import styles from "./styles";

const Splash = ({navigation}) => {

    return (
        <ImageBackground style={styles.background} source={require('../../../assets/splash.png')}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../../assets/logo.png')}></Image>
                <Text style={styles.title}>100K+ Premium Recipe </Text>

            </View>

            <View style={styles.container}>
                <Text style={styles.bigtitle}>Get </Text>
                <Text style={styles.bigtitle}>Cooking </Text>
                <Text style={styles.subtitle}>Simple way to find Tasty Recipe </Text>
                <Button onPress={()=>navigation.navigate('Home')}>Start Cooking</Button>
            </View>
        </ImageBackground>

    )
}

export default React.memo(Splash);
