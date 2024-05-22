import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/InputText";
import { styles } from "./styles";

interface LoginProps{
    text: string;
}


export const Login = ({text}:LoginProps) => {
    
    const [email, setEmail] =  useState()
    const [password, setPassword] =  useState()

    const  handleSubmit = ()=>{
       console.log(setEmail(email))
    }

    return(
        <View style={styles.container}> 
            <View>
                <Text>{text}</Text>
                <Input onChangeText={() =>{setEmail}} placeholder="Email"/>
                <Input onChangeText={()=>{setPassword}} placeholder="Senha"/>
                <Button saudacao={handleSubmit}/>
            </View>
        </View>
    )
}