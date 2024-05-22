import { Image, View } from "react-native"
import { Button } from "../../components/Button"
import { styles } from "./styles"

export const CardHeliar = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../Images/BateriaHeliar.jpg')} style={styles.image}/>
            </View>
            <View>
                <Button nome="Consulte já os valores" func={() => console.log("Heliar")} containerStyle={styles.buttonStyle}/>
            </View>
        </View>
    )
}