import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './Card.style';

const Card = (props) => {
    return(
        <View style={styles.Container}>
            <View style={styles.Body}>
                <Text style={styles.Title}>{props.title}</Text>
                <Text style = {styles.Text}>{props.text}</Text>
            </View>
            <TouchableOpacity style = {styles.Button}>
                <Text style = {styles.ButtonTitle}>I LIKED</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Card;