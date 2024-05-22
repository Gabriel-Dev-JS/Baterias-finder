import { Image, View } from "react-native"
import { Button } from "../../components/Button"
import { styles } from "./styles"

export const CardZetta = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../Images/BateriaZetta.png')} style={styles.image}/>
            </View>
            <View>
                <Button nome="Consulte já os valores" func={() => console.log("Zetta")} containerStyle={styles.buttonStyle}/>
            </View>
            
        </View>
    )
}