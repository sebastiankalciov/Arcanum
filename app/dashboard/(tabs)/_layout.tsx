import {Tabs} from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import {Colors} from "@/styles";
import SettingsScreen from "@/app/dashboard/(tabs)/SettingsScreen";
export default function TabLayout() {
    return (
        <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: "#947ee8"}}>
            <Tabs.Screen
                name = "HomeScreen"
                options = {{
                    tabBarShowLabel: false,
                    tabBarStyle: {backgroundColor: Colors.background, borderTopWidth: 0},
                    tabBarIcon: ({ color }) => <AntDesign size={28} name="home" color={color} />,
                }}/>
            <Tabs.Screen
                name = "SettingsScreen"
                options = {{
                    tabBarShowLabel: false,
                    tabBarStyle: {backgroundColor: Colors.background, borderTopWidth: 0},
                    tabBarIcon: ({ color }) => <Feather size={28} name="settings" color={color} />,
                }}/>
        </Tabs>
    )
}