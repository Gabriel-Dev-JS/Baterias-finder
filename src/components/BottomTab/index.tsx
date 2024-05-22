import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../../screens/Home"
import { Search } from "../../screens/Search"
import { Settings } from "../../screens/Settings"
import { Warranty } from "../../screens/Warranty"

import { AntDesign, Feather, Foundation, MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen  
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({size, color}) => (
                    <Foundation name="home" size={size} color={color}/>
                )
            }}
            />
            <Tab.Screen  
            name="Pesquisar" 
            component={Search}
            options={{
                tabBarIcon: ({size, color}) => (
                    <AntDesign name="search1" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen  
            name="Garantias" 
            component={Warranty}
            options={{
                tabBarIcon: ({size, color}) => (
                    <MaterialCommunityIcons name="certificate-outline" size={size} color={color}/>
                )
            }}
            />
            <Tab.Screen  
            name="Configurações" 
            component={Settings}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Feather name="settings" size={size} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    )
}