import React, { useState } from "react";
import {Text,Image,View} from 'react-native';
import styles from './styles';


const Rating = ({rating}) => {
    const arr = [1,2,3,4,5];
    const [ratingValue, setRatingValue] = useState(rating);
  
    const renderStarts = () => {
        return arr?.map(star => {
            if(Math.round(rating) >= star){
                return (
                    <Image key={star} style={styles.star} source={require('../../../assets/star.png')} />
                );
            }
            return (
                <Image key={star} style={styles.star} source={require('../../../assets/starEmpty.png')} />
            );
          
        });
    }
    
    return (
            <View style={styles.row} >
                {renderStarts()}
            </View>
    );
}


export default React.memo(Rating);