import { StyleSheet } from "react-native";
import { color } from "../../Cores";

export const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor: color.background
    },
    page:{
        height:500,
        width:300
    }
})