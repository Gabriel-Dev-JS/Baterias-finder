import { StyleSheet } from "react-native";
import { color } from "../../Cores";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:color.cardColor,
        height:450,
        width:300,
        borderRadius:10,
        alignItems:"center"
    },
    image:{
        width:300,
        height:350,
        borderRadius:10
    },
    buttonStyle:{
        width:280,
    }
})