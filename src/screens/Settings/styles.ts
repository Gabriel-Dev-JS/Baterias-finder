import { StyleSheet } from "react-native";
import { color } from "../../Cores";

export const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:color.background
    },
    filho:{
        height:300, 
        width:300, 
        justifyContent:'space-between', 
        alignItems:'center'
    }
})