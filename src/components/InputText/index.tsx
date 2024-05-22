import { TextInput, View } from "react-native";
import { styles } from "./styles";


interface  InputProps{
    onChangeText: (text:string | number) => void;
    placeholder:string;
    value?: string;
    icon: JSX.Element;
}

export const Input = ({onChangeText, placeholder, value, icon}:InputProps) => {
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
            <View style={styles.icone}>{icon}</View>
        </View>
       
    )
}

