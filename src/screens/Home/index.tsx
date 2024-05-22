import React from "react";
import { Dimensions, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import { CardHeliar } from "../CardHeliar";
import { CardMoura } from "../CardMoura";
import { CardZetta } from "../CardZetta";
import { styles } from "./style";


export const Home = () => {
    
    const slideWidth = Dimensions.get("window").width
    const item_Width = slideWidth * 0.88
    
    type cardProps = {
        // item: {card:JSX.Element};
        item: {card:string};
        index: number;
    }
    const cards = [
        // {card:"Gabriel"},
        // {card:"Luis"},
        // {card:"Oliveira"}
        {card: <CardHeliar/>},
        {card: <CardMoura/>},
        {card: <CardZetta/>}
    ]

    const CardItem = ({item,index}: cardProps) => {
        return(
            <View key={index}>
                <Text>
                    {item.card}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* <Carousel
            data={cards}
            renderItem={CardItem}
            sliderWidth={slideWidth}
            itemWidth={item_Width}
            useScrollView={true}
            /> */}

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

