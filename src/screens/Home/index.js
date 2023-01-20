import React, { useContext, useEffect,useState } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HealthyRecipesContext, RecipesContext } from "../../../App";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Categories from "../../components/Categories";
import styles from "./styles";
import RecipeCard from "../../components/RecipeCard";
import Card from "../../components/Card";




const Home = ({navigation}) => {
    const [tags,setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState();
    const [selectedRecipes, setSelectedRecipes] = useState(recipes);
    const {healthyRecipes} = useContext(HealthyRecipesContext);
    const {recipes} = useContext(RecipesContext);


    useEffect(() => {
        const tagsList=[]
        recipes.forEach((recipe)=>{
            recipe.tags.forEach((tag)=>{   
                if(!tagsList.includes(tag.name)){
                    tagsList.push(tag.name)
                }
             })
        })
        setTags(tagsList)
     
    }, [recipes]);

    useEffect(() => {
        if(selectedTags){
            const filteredRecipes = recipes.filter((recipe)=>{
                return recipe.tags.some((tag)=>tag.name===selectedTags)
            })
            setSelectedRecipes(filteredRecipes)
        }else{
            setSelectedRecipes(recipes)
        }
    }, [selectedTags]);
   

    return (
        <SafeAreaView style={styles.container}>
                <Input pressable onPress={()=>navigation.navigate('Search')} />

                <Title text="Healthy Recipes"/>
                <FlatList 
                horizontal
                data={healthyRecipes}
                style={{marginHorizontal:-20}}
                keyExtractor = {item => String(item.id)}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index})=>(
                    <RecipeCard
                    style={index===0 ? {marginLeft:10} : {}}
                    onPress={()=>navigation.navigate('RecipeDetails',{item})}
                    title={item.name}
                    time={item.cooking_time_minutes}
                    image={item.thumbnail_url}
                    rating={item.user_ratings?.score}
                    author={item.credits?.length ? {name:item.credits[0].name,image:item.credits[0].image_url}: null }
                    />
                )}/>
             
                <Categories categories={tags} selectedCategory={selectedTags} onCategoryPress={setSelectedTags}></Categories>
                    
                <FlatList
                horizontal
                data={selectedRecipes}
                style={{ marginHorizontal: -24 }}
                keyExtractor = {item => String(item.id)}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item,index }) => (
                    <Card
                    style={index===0 ? {marginLeft:10} : {}}
                    onPress={()=>navigation.navigate('RecipeDetails',{item})}
                    title={item.name}
                    servings={item.num_servings}
                    image={item.thumbnail_url}
                    rating={item.user_ratings?.score}
                    author={item.credits?.length ? {name:item.credits[0].name,image:item.credits[0].image_url}: null }
                    />
                )}
            />
        </SafeAreaView>

    )
}

export default React.memo(Home);
