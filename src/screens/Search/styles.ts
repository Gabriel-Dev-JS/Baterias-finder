import { StyleSheet } from "react-native";
import { color } from "../../Cores";

export const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'space-between', 
        alignItems:'center',
        backgroundColor:color.background
    },
    input:{
        padding:30, 
        height:'20%'
    },
    list:{
        height:'70%'
    }
})