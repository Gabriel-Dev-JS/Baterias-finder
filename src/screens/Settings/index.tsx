import { View } from "react-native"
import { Button } from "../../components/Button"
import { styles } from "./styles"

export const Settings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.filho}>
                <View>
                    <Button nome="RECUPERAR SENHA" func={() => console.log("recuperar senha")}/>
                </View>
                <View>
                    <Button nome="SEGUNDA VIA DA GARANTIA" func={() => console.log("segunda via da garantia")}/>
                </View>
                <View>
                    <Button nome="GERAR BOLETO NOVAMENTE" func={() => console.log("gerar boleto novamente")}/>
                </View>
            </View>
        </View>
    )
} 