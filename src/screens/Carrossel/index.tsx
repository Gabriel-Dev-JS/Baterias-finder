import { View } from "react-native"
import PagerView from "react-native-pager-view"
import { CardHeliar } from "../CardHeliar"
import { CardMoura } from "../CardMoura"
import { CardZetta } from "../CardZetta"


export const Carrossel = () => {
        <View>
            <PagerView>
                <View key="1">  
                    <CardZetta/>
                </View>
                <View key="2">  
                    <CardHeliar/>
                </View>
                <View key="3">
                    <CardMoura/>
                </View>
            </PagerView>
        </View>
}