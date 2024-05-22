import React from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";
import { CardHeliar } from "../CardHeliar";
import { CardMoura } from "../CardMoura";
import { CardZetta } from "../CardZetta";
import { styles } from "./style";


export const Home = () => {
    
  

    return (
        <View style={styles.container}>
            <PagerView style={styles.page} initialPage={0} >
                <View key="1">
                    <CardHeliar/>
                </View>
                <View key="2">
                    <CardMoura/>
                </View>
                <View key="3">
                    <CardZetta/>
                </View>
            </PagerView>
        </View>
    )
} 

