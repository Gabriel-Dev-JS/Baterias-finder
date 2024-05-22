import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Input } from "../../components/InputText";
import { SearchIcon } from "../../components/SearchIcon";
import { styles } from "./styles";


export const Search = () => {
    const [baterias, setBaterias] = useState([]);
    const [filtrarBaterias, setFiltrarBaterias] = useState([]);
    const [valor, setValor] = useState("");

    useEffect(() => {
        fetch("https://api.github.com/users/Gabriel-Dev-JS/repos")
        .then((response) => response.json())
        .then((data) => {
          setBaterias(data);
        });
    },[])

    const dados = () => {
        return setFiltrarBaterias(
        baterias.filter(
            (place) =>
                //@ts-ignore
              place.name.trim().toLowerCase() === valor.trim().toLowerCase()
          ),
        );
      };

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <Input placeholder="Informe seu veiculo ?"
                //@ts-ignore
                onChangeText={(text) => setValor(text)}
                icon={ <SearchIcon handleIcon={dados}/>}
                />
            </View> 
            <View style={styles.list}> 
                <FlatList
                    data={filtrarBaterias}
                    renderItem={(itens) => (
                        //@ts-ignore   
                        <Text>{valor.length == 0 ? <Text>Não encontrado</Text> : <Text>{itens.item.name}</Text> }</Text>
                    )}
                /> 
            </View> 
        </View>
    )
} 