import React from "react";
import {Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";




const RecipeDetails = ({route}) => {
    const {item} = route.params || {};
    const nutrition = item.nutrition || {};
    console.log("instruction==",instruction)
    const instruction=item.instructions || [];
    delete nutrition.updated_at;
    const nutritionKeys = Object.keys(nutrition || {});

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri:item.thumbnail_url}} />
            <Title style={{marginBottom:20}} text={item.name}/>
            {nutritionKeys.map((key,index) =>
            (
                <View  key={key} style={styles.row}>
                    <Text style={styles.key}>{key}</Text>
                    <Text style={styles.value}>{nutrition[key]}</Text>
                </View>
            ) )}

        <Title style={{marginTop:25,marginBottom:10}} text="Instruction"/>
        {instruction.map((instruction,index) =>
            (
                <View  key={instruction.id} style={styles.instructionRow}>
                    <Text style={styles.index}>{index+1}</Text>
                    <Text style={styles.instructionText}>{instruction.display_text}</Text>
                </View>
            ) )}

            {
                !instruction.length && <Text style={{fontSize:16, color:'red'}}>No Instruction Found</Text>
            }
        </ScrollView>

    )
}

export default React.memo(RecipeDetails);
