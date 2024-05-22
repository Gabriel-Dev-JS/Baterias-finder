import { Image, View } from "react-native"
import { Button } from "../../components/Button"
import { styles } from "./styles"

export const CardMoura = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../Images/BateriaMoura.png')} style={styles.image}/>
            </View>
            <View>
                <Button nome="Consulte já os valores" func={() => console.log("Moura")} containerStyle={styles.buttonStyle}/>
            </View>
        </View>
    )
}