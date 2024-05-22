import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../../screens/Home"
import { Search } from "../../screens/Search"
import { Settings } from "../../screens/Settings"
import { Warranty } from "../../screens/Warranty"

import { AntDesign, Feather, Foundation, MaterialCommunityIcons } from '@expo/vector-icons'
import { color } from "../../Cores"

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{backgroundColor:color.cardColor, borderTopWidth:0}
        }}
        >
            <Tab.Screen  
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({size, color}) => (
                    <Foundation name="home" size={size} color={"black"}/>
                )
            }}
            />
            <Tab.Screen  
            name="Pesquisar" 
            component={Search}
            options={{
                tabBarIcon: ({size, color}) => (
                    <AntDesign name="search1" size={size} color={"black"} />
                ),
            }}
            />
            <Tab.Screen  
            name="Garantias" 
            component={Warranty}
            options={{
                tabBarIcon: ({size, color}) => (
                    <MaterialCommunityIcons name="certificate-outline" size={size} color={"black"}/>
                )
            }}
            />
            <Tab.Screen  
            name="Configurações" 
            component={Settings}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Feather name="settings" size={size} color={"black"} />
                )
            }}
            />
        </Tab.Navigator>
    )
}