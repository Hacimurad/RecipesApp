import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RecipesContext } from "../../../App";
import Card from "../../components/Card";
import Input from "../../components/Input";
import styles from "./styles";


const Search = ({navigation}) => {
    const {recipes} = React.useContext(RecipesContext);
    const [filteredData, setFilteredData] = React.useState([]);
    const [searchText, setSearchText] = React.useState('');
console.log(searchText)

    React.useEffect(() => {
        if (searchText.length > 1) {
            const filteredData = recipes.filter((item) => {
                const itemData = item.name.toUpperCase();
                const textData = searchText.toUpperCase();
                return itemData.indexOf(textData) > -1;
               
            });
            setFilteredData(filteredData);
            
        }else{
            setFilteredData([])
        }
        
    }, [searchText]);

    return (
        <SafeAreaView style={styles.container}>
            
                <Input autoFocus onChangeText={setSearchText} value={searchText} />

                <FlatList
                    data={filteredData}
                    numColumns={2}
                    showsHorizontalScrollIndicator={true}
                    keyExtractor = {item => String(item.id)}
                    renderItem={({item,index}) => (
                        <Card
                        title={item.name}   
                        onPress={()=>navigation.navigate('RecipeDetails',{item})}
                        servings={item.num_servings}
                        image={item.thumbnail_url}
                        rating={item.user_ratings?.score}
                        author={item.credits?.length ? {name:item.credits[0].name,image:item.credits[0].image_url}

                        : null }
                    />
                )}
                />
        </SafeAreaView>

    )
}

export default React.memo(Search);
