import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface ButtonProps{
    nome:string;
    func: () => void;
    containerStyle?: StyleProp<ViewStyle>;
}

export const Button = ({nome,func, containerStyle = StyleSheet.create({})}:ButtonProps) => {
    return(
        <TouchableOpacity  
        style={[styles.buttonStyles, containerStyle]} 
        activeOpacity={0.7} 
        onPress={func}
        >
            <View><Text>{nome}</Text></View>
        </TouchableOpacity>
    )
}